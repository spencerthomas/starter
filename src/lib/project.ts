export const repository = "https://github.com/spencerthomas/starter";
export const projectKinds = [
  {
    id: "analysis",
    label: "Analysis",
    name: "Customer retention",
    directory: "customer-retention",
    brief: "Understand why customers leave.",
    prompt:
      "Use https://github.com/spencerthomas/starter to scaffold a data analysis project in ../customer-retention. We need to understand why customers leave.",
    first:
      "Name the population, timeframe, and source data. Check missing values, duplicates, and joins before drawing a conclusion.",
  },
  {
    id: "feature",
    label: "A feature",
    name: "Review workspace",
    directory: "review-workspace",
    brief: "Explore a clearer document review workflow.",
    prompt:
      "Use https://github.com/spencerthomas/starter to scaffold a product feature project in ../review-workspace. I want to explore a clearer document review workflow.",
    first:
      "Describe the user journey and the smallest observable improvement. Choose a stack only when you need to test that behavior.",
  },
  {
    id: "research",
    label: "Research",
    name: "Market research",
    directory: "market-research",
    brief: "Investigate a market and produce a sourced report.",
    prompt:
      "Use https://github.com/spencerthomas/starter to scaffold a research project in ../market-research. We need a sourced report on the market, with open questions made explicit.",
    first:
      "Define the decision the report supports. Set a source standard, trace important claims, and keep conflicting evidence visible.",
  },
  {
    id: "general",
    label: "Something else",
    name: "New project",
    directory: "new-project",
    brief: "Explore the question and produce a useful first result.",
    prompt:
      "Use https://github.com/spencerthomas/starter to scaffold a general project in ../new-project. Help me define the question and a useful first result.",
    first:
      "Name the audience and the smallest useful deliverable. Let the structure grow from what the work actually needs.",
  },
] as const;
export const loopSteps = [
  {
    id: "inspect",
    title: "Inspect",
    detail:
      "Read the brief, inspect the current artifact, and establish a baseline.",
    artifact: "The question + the current state",
    node: "Context",
    body: "What do we know? What is still missing?",
  },
  {
    id: "act",
    title: "Act",
    detail: "Make the smallest coherent change within the agreed scope.",
    artifact: "A focused change or experiment",
    node: "Work",
    body: "Code, analysis, a report, or an experiment.",
  },
  {
    id: "verify",
    title: "Verify",
    detail:
      "Check the result where it will be used. Keep the method and its limits.",
    artifact: "An observed result, with evidence",
    node: "Evidence",
    body: "Check the result against the brief.",
  },
  {
    id: "review",
    title: "Review",
    detail:
      "Compare the result with the brief. Fix actionable failures and identify missing access, evidence, or decisions.",
    artifact: "A finding, correction, or decision",
    node: "Judgment",
    body: "Does the result answer the actual question?",
  },
  {
    id: "finish",
    title: "Finish",
    detail:
      "Record what changed, what was checked, and what remains unresolved.",
    artifact: "Relevant decisions, evidence, and next steps",
    node: "Records",
    body: "What should the next run know?",
  },
] as const;
