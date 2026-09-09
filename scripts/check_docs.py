#!/usr/bin/env python3
"""Run the canonical template checker against the starter distribution."""

import importlib.util
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("starter_doc_check", ROOT / "template/scripts/check_docs.py")
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
check = module.check
REQUIRED_FILES = module.REQUIRED_FILES
REQUIRED_DIRS = module.REQUIRED_DIRS

if __name__ == "__main__":
    module.DEFAULT_ROOT = ROOT
    raise SystemExit(module.main())
