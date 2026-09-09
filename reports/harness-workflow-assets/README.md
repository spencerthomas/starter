# Source diagram provenance

Producer: direct image extraction with pypdf; no image editing or redraw.
Inputs: user-supplied OpenAI article PDF, SHA-256 `513d10fed62e25e0f09226d8130f740f9c9a9d0e8e28f8981d296d42c6094f86`, acquired 2026-09-09; [source manifest](../../data/manifest.md).

The three diagrams are OpenAI source illustrations included for this requested analysis, not newly authored starter diagrams. They were visually inspected. Their inclusion does not grant a license for unrelated reuse. The report's Mermaid diagram is an original adaptation. No assets are copied into generated projects.

| Extracted file | PDF page | SHA-256 |
| --- | --- | --- |
| `application-legibility.png` | 3 | `4625f373db4dd1ef0db461885a82c45274ae16a5bcdca126f332064e92408c25` |
| `knowledge-map.png` | 6 | `98c98bbedf6d71bac933f8669fb111b1513b7682913fdf1efb08fcae093a6813` |
| `architecture-boundaries.png` | 8 | `46493bbb98f3b9fe1903414e23880a411b3c55344d3ad5877eeeed42b556be25` |

Regenerate: from the repository root with Python and pypdf available:

```python
from pathlib import Path
from pypdf import PdfReader
reader = PdfReader("data/raw/openai-harness-engineering.pdf")
for page, name in ((3, "application-legibility"), (6, "knowledge-map"), (8, "architecture-boundaries")):
    image = reader.pages[page - 1].images[0]
    Path(f"reports/harness-workflow-assets/{name}.png").write_bytes(image.data)
```

The unchanged source PDF remains local and ignored by Git. The canonical public article is [OpenAI's original](https://openai.com/index/harness-engineering/).
