import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CopyBlock } from "../../components/site/copy-block";
import { StartOptions } from "../../components/site/start-options";
export const metadata: Metadata = {
  title: "Get started — Starter",
  description:
    "Create a minimal project with Codex, Claude, or the dependency-free Python scaffold.",
  alternates: { canonical: "/getting-started" },
};
export default function GettingStarted() {
  return (
    <main id="main" className="page-width guide-page">
      <div className="page-intro">
        <h1>
          Start small. <br />
          Start here.
        </h1>
        <p>
          You need a question, a place for the project, and an agent—or a
          terminal. You don’t need to choose a framework yet.
        </p>
      </div>
      <div className="guide-layout">
        <aside className="contents">
          <span>On this page</span>
          <a href="#with-an-agent">With an agent</a>
          <a href="#with-the-cli">From the terminal</a>
          <a href="#shared-skill">Install the shared skill</a>
          <a href="#first-task">The first useful task</a>
          <a href="#questions">A few practical details</a>
        </aside>
        <div className="guide-content">
          <section id="with-an-agent">
            <h2>Use an agent.</h2>
            <p>
              Open Codex or Claude and give it the repository URL, a
              destination, and the outcome you have in mind. These examples are
              starting points, not fixed project types.
            </p>
            <StartOptions />
            <p>
              The agent can read the shared scaffold skill from the repository,
              create the minimal structure, and tailor the brief. Tell it
              whether you want to stop at scaffolding or continue into the first
              task.
            </p>
          </section>
          <section id="with-the-cli">
            <h2>Or use the terminal.</h2>
            <p>
              The generator requires <strong>Python 3.10 or later</strong> and
              no third-party packages. Clone the starter once, then run it from
              that checkout. This guide currently targets the
              template-and-workflow branch.
            </p>
            <CopyBlock
              label="Clone the starter"
              text={
                "git clone --branch codex/starter-template-workflow https://github.com/spencerthomas/starter.git\ncd starter"
              }
            />
            <StartOptions cli />
            <p>
              Add <code>--dry-run</code> to preview the files. The destination
              must be empty; existing <code>.git/</code> metadata is allowed.
              The generator does not initialize Git, install packages, or change
              remotes.
            </p>
          </section>
          <section id="shared-skill">
            <h2>Make it available next time.</h2>
            <p>From the starter checkout, install the shared skill once:</p>
            <CopyBlock
              label="Install the skill"
              text="python3 scripts/scaffold.py --install-skills"
            />
            <p>
              This links the skill into <code>~/.agents/skills/</code> for Codex
              and <code>~/.claude/skills/</code> for Claude. Existing entries
              are preserved. Keep the starter checkout at its current path, then
              start a new agent session.
            </p>
            <div className="invocation-pair">
              <div>
                <span>Codex</span>
                <code>$start-project</code>
              </div>
              <div>
                <span>Claude</span>
                <code>/start-project</code>
              </div>
            </div>
            <p>
              You can also ask naturally: “Use the starter for a research
              project.” Explicit invocation is useful when discovery is unclear.
            </p>
          </section>
          <section id="first-task">
            <h2>Then do one useful thing.</h2>
            <p>
              A scaffold is a starting point. Before building more structure,
              use the brief to name a result you can actually inspect.
            </p>
            <ol className="guide-steps">
              <li>
                <strong>Make the question concrete.</strong>
                <p>
                  Who is the result for? What decision or task will it support?
                </p>
              </li>
              <li>
                <strong>Identify the inputs and tools.</strong>
                <p>
                  Record what is available and what still needs access. Choose
                  only the capabilities this task requires.
                </p>
              </li>
              <li>
                <strong>Define the evidence.</strong>
                <p>
                  A command, an inspected artifact, a traced claim, or an
                  observed user journey. Be specific about what success would
                  establish.
                </p>
              </li>
              <li>
                <strong>Work through the loop.</strong>
                <p>
                  Inspect, act, verify, review, and finish. Keep useful
                  decisions and leave a clear handoff.
                </p>
              </li>
            </ol>
            <CopyBlock
              prose
              label="A next-task prompt"
              text="Read the project brief and follow the repository workflow. Help me produce the smallest useful result, using the inputs and tools available. Record what you verified and what remains uncertain."
            />
          </section>
          <section id="questions">
            <h2>A few practical details.</h2>
            <div className="faq">
              <details>
                <summary>What if I already have a project?</summary>
                <p>
                  Ask the agent to inspect and adapt the existing repository
                  deliberately. The generator refuses nonempty destinations.
                  Preserve useful files and decisions; add only the missing
                  structure.
                </p>
              </details>
              <details>
                <summary>Why not use GitHub’s template button?</summary>
                <p>
                  That button copies this whole distribution, including its
                  website and tooling. The generator copies only the project
                  template, which is the cleanest starting path.
                </p>
              </details>
              <details>
                <summary>Do I need additional plugins?</summary>
                <p>
                  No. The scaffold itself has no plugin requirements. Discover
                  and add capabilities for the first real task—data access,
                  document rendering, browser interaction, or another concrete
                  need.
                </p>
              </details>
              <details>
                <summary>Will it make agents follow the workflow?</summary>
                <p>
                  The repository makes conventions discoverable and checks some
                  structural rules. It cannot guarantee agent compliance or
                  factual correctness. Observe the result and keep the evidence
                  explicit.
                </p>
              </details>
            </div>
          </section>
          <div className="guide-end">
            <p>
              The structure is the beginning. <br />
              The work tells you what comes next.
            </p>
            <Link className="text-link" href="/why-starter">
              Read the thinking behind Starter <ArrowRight size={17} />
            </Link>
            <a
              className="text-link"
              href="https://github.com/spencerthomas/starter"
            >
              Open the repository <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
