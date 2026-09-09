export const essayTitle = "Project structure for agent work";
export const essayDeck =
  "How the repository layout, instructions, and checks support code, analysis, and research.";
export const essayLead =
  "Starter provides a reusable repository layout, a Python generator, and a shared scaffolding skill for Codex and Claude Code. Generated projects include a brief, agent instructions, documentation, work folders, and a structural documentation checker.";
export const essayAttribution =
  "The approach adapts ideas from Ryan Lopopolo’s harness engineering article at OpenAI. Starter applies them to code, analysis, research, reports, and presentations, while leaving project-specific tools and implementation choices open.";
export const essayClosing =
  "Use the guide to create a project with an agent or the Python generator. Then define the first deliverable, its inputs, and how you will check it.";
export const essaySections = [
  {
    id: "a-place-to-begin",
    title: "Define the intended result.",
    paragraphs: [
      "The generator writes your stated outcome into a draft project brief. It adds guidance for one of four project kinds: general, analysis, feature, or research. These choices affect the initial questions and suggested checks; they do not install an application framework or select a dataset.",
      "The brief leaves unresolved scope, inputs, and acceptance criteria explicit. The shared skill asks the agent to replace that generic guidance with known project facts. After the required starter layout, add folders and dependencies when a concrete task needs them.",
    ],
  },
  {
    id: "the-environment",
    title: "Establish the working conditions.",
    paragraphs: [
      "OpenAI’s account describes an environment with repository documentation, tools for observing an application, automated checks, and review processes. Its reported autonomy depends on that environment. Starter adopts the documentation and workflow principles; it does not provide the same runtime tools.",
      "The template asks agents to establish a working agreement before substantive work: the intended outcome, scope, available inputs and tools, and the evidence needed to assess the result. Record these in the brief or current plan. The generator supplies the fields; the person or agent must fill in the task-specific details.",
    ],
  },
  {
    id: "a-map",
    title: "Read the relevant project documents.",
    paragraphs: [
      "AGENTS.md directs readers to the README, architecture, specifications, plans, and quality records. CLAUDE.md imports the same instructions for Claude Code. The documentation checker limits AGENTS.md to 100 lines so detailed guidance belongs in linked documents.",
      "The instructions ask agents to read the documents relevant to the task. Starter does not select or retrieve those documents automatically. Record decisions that later work will depend on in the appropriate repository document, with references to supporting evidence.",
    ],
  },
  {
    id: "different-kinds-of-work",
    title: "Separate inputs, analysis, and deliverables.",
    paragraphs: [
      "Generated projects have separate directories for maintained documentation, data, analysis, reports, presentations, and other outputs. Their guides explain where to record sources, methods, reproduction commands, and review status. Code directories are added when implementation begins.",
      "The quality register distinguishes unassessed work, known gaps, locally verified results, and accepted results. Keep drafts and experiments with their status and limitations. When several variants exist, identify their purpose and record which result was accepted. Directory names alone do not establish correctness or acceptance.",
    ],
  },
  {
    id: "the-loop",
    title: "Follow the five-step workflow.",
    paragraphs: [
      "WORKFLOW.md gives agents five steps: inspect, act, verify, review, and finish. It asks them to establish a baseline, make a focused change, check the result, compare it with the brief, and record relevant decisions and evidence. This is an instruction document, not an agent execution service.",
      "The checks depend on the work. For software, exercise the relevant behavior and failure cases. For analysis, check the inputs and reproduce the result. For research, trace claims to sources and record conflicting evidence. For documents and presentations, inspect the rendered output. Project-specific tools and checks must be added when needed.",
      "If the same failure persists after two materially different attempts, the workflow asks the agent to stop that loop, preserve the evidence, and identify the missing access, capability, or decision. Independent work can continue. The instruction does not impose a runtime retry limit.",
    ],
  },
  {
    id: "boundaries",
    title: "Check specific constraints.",
    paragraphs: [
      "The template tells contributors to preserve original inputs, keep sensitive material out of Git, record provenance, and respect the agreed scope. These are operating rules. The supplied ignore patterns cover selected files and data directories; they do not scan file contents or prevent changes to original inputs.",
      "One constraint is enforced by the generator: it copies an explicit list of files from template/. Website code and distribution documents are excluded. Regression tests check key files and references to detect accidental copying of distribution content into generated projects.",
      "The design guidance recommends adding a focused check when a failure recurs. Schema validation, dependency rules, and export checks are possible project additions, not bundled capabilities. Add them to address an observed problem and explain how to fix a failed check.",
    ],
  },
  {
    id: "working-together",
    title: "Assign ownership for shared work.",
    paragraphs: [
      "For work spanning agents or sessions, the plan template asks for an outcome, owner, input paths, write scopes, and acceptance checks. The instructions call for independent assignments and one integrating agent responsible for the combined result and shared indexes. Separate worktrees are an option when concurrent edits need isolation.",
      "Workers are asked to return changed artifacts, verification evidence, limitations, and the next action. These records are intended to support a later session without the original conversation. The repository’s acceptance plan still calls for fresh Codex and Claude sessions and a shared-task handoff trial; that outcome has not been established by the generator tests.",
    ],
  },
  {
    id: "autonomy",
    title: "Keep authority and verification explicit.",
    paragraphs: [
      "The workflow preserves the user’s existing permissions. Preparing a result does not authorize publishing, deployment, merging, spending, or sending messages. It also asks agents to continue already authorized work without repeated approval requests. Permissions are managed by the user and agent environment, not by the scaffold.",
      "The structural checker validates required files and directories, selected local Markdown links, catalog entries, review dates, and provenance fields for generated documentation. It does not assess factual accuracy or whether an agent followed the workflow. Required checks and material correctness failures remain blocking under the written conventions.",
    ],
  },
  {
    id: "maintenance",
    title: "Maintain the guidance with the work.",
    paragraphs: [
      "OpenAI’s article describes agents replicating existing repository patterns, including poor ones. Starter’s maintenance instructions ask contributors to compare affected guidance with observed behavior, remove obsolete instructions, and record useful corrections in a document, example, or check. They do not require a new rule after every task.",
      "The scaffold includes a GitHub Actions workflow configured to run the structural checker weekly. Scheduled runs require the workflow on the repository’s default branch and GitHub Actions to be enabled. Generating a local project does not start a scheduled job.",
      "Reviewing whether documentation matches the actual work remains a contributor task. A recurring reviewing agent would require separate setup, including its tools, permissions, owner, scope, and stop condition. Starter does not install one.",
    ],
  },
  {
    id: "start-small",
    title: "Test the structure on a real task.",
    paragraphs: [
      "The generator and shared skill create and tailor the initial structure. The next step is a project task: define an inspectable deliverable, use the available inputs, and record what was checked. Add only the tools and structure required for that work.",
      "Assess the result against the brief. Check whether another person or agent can find the intent, inspect or reproduce the output, and identify unresolved questions. These are the project’s intended acceptance criteria; a successful scaffold command establishes only that the initial structure was created and passed its documentation check.",
    ],
  },
] as const;
