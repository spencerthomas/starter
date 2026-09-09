"""Behavior checks for overwrite protection, generated projects, and doc drift."""

from datetime import date, timedelta
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))
from check_docs import check
from scaffold import KINDS, install_skills, scaffold


class StarterTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)

    def project(self, kind="general"):
        return scaffold(self.root / kind, "A project", kind, "Answer a real question.")

    def test_all_kinds_generate_portable_minimal_projects(self):
        for kind in KINDS:
            with self.subTest(kind=kind):
                project = self.project(kind)
                result = subprocess.run([sys.executable, str(project / "scripts/check_docs.py")],
                                        cwd=self.root, capture_output=True, text=True)
                self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
                self.assertIn("Answer a real question.", (project / "README.md").read_text())
                self.assertIn("Not applicable", (project / "docs/FRONTEND.md").read_text())
                for absent in (".git", "skills", "tests", "src", "apps", "package.json",
                               "scripts/scaffold.py", "vercel.json", ".github/workflows/starter.yml"):
                    self.assertFalse((project / absent).exists(), absent)

    def test_existing_work_and_symlinks_are_preserved(self):
        project = self.root / "existing"
        project.mkdir()
        valuable = project / "notes.md"
        valuable.write_text("keep me")
        with self.assertRaisesRegex(ValueError, "not empty"):
            scaffold(project, "Existing", "general", "Test")
        self.assertEqual(valuable.read_text(), "keep me")
        self.assertEqual(list(project.iterdir()), [valuable])
        alias = self.root / "alias"
        alias.symlink_to(project, target_is_directory=True)
        with self.assertRaisesRegex(ValueError, "symlink"):
            scaffold(alias, "Alias", "general", "Test")

    def test_empty_git_checkout_and_dry_run(self):
        project = self.root / "empty"
        (project / ".git").mkdir(parents=True)
        config = project / ".git/config"
        config.write_text("preserve git config")
        scaffold(project, "Empty", "general", "Test")
        self.assertEqual(config.read_text(), "preserve git config")
        preview = self.root / "missing-parent/preview"
        scaffold(preview, "Preview", "feature", "Test", dry_run=True)
        self.assertFalse(preview.parent.exists())

    def test_checker_detects_drift(self):
        project = self.project()
        (project / "docs/DESIGN.md").write_text("# Design\n[Missing](missing.md)\n")
        (project / "docs/design-docs/unlisted.md").write_text("# Unlisted")
        (project / "docs/generated/schema.md").write_text("# Generated schema")
        errors = "\n".join(check(project))
        self.assertIn("broken/outside local link", errors)
        self.assertIn("add status and review date", errors)
        self.assertIn("add Producer:", errors)
        self.assertTrue(any("review " in error for error in check(project, date.today() + timedelta(days=91))))

    def test_reference_links_and_code_examples(self):
        project = self.project()
        guide = project / "docs/DESIGN.md"
        guide.write_text("# Design\n```md\n[Example](not-real.md)\n```\n[Real][ref]\n[ref]: absent.md\n")
        errors = "\n".join(check(project))
        self.assertIn("absent.md", errors)
        self.assertNotIn("not-real.md", errors)

    def test_install_is_idempotent_and_preflights_conflicts(self):
        home = self.root / "home"
        install_skills(home, dry_run=True)
        self.assertFalse(home.exists())
        conflict = home / ".claude/skills/start-project"
        conflict.mkdir(parents=True)
        with self.assertRaisesRegex(ValueError, "already exists"):
            install_skills(home)
        self.assertFalse((home / ".agents").exists())
        conflict.rmdir()
        install_skills(home)
        install_skills(home)
        for relative in (".agents/skills/start-project", ".claude/skills/start-project"):
            link = home / relative
            self.assertTrue(link.is_symlink())
            self.assertTrue((link / "SKILL.md").is_file())


if __name__ == "__main__":
    unittest.main()
