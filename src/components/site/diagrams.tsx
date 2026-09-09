"use client";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import {
  ArrowRight,
  ArrowDown,
  FileText,
  Folder,
  Check,
  Plus,
} from "lucide-react";
import { loopSteps } from "../../lib/project";

export function ProjectAtlas() {
  const [selected, setSelected] = useState("context");
  const reduced = useReducedMotion();
  const info: Record<string, { title: string; description: string }> = {
    context: {
      title: "Record the project context.",
      description:
        "Record the outcome, decisions, and constraints in the brief and relevant documents.",
    },
    work: {
      title: "Choose tools for the task.",
      description:
        "Use the analysis and deliverable folders for project work. Add code directories and dependencies when needed.",
    },
    evidence: {
      title: "Record evidence and uncertainty.",
      description:
        "Record the result, checking method, and limitations. Keep drafts and experiments with their review status.",
    },
  };
  return (
    <figure className="atlas">
      <div className="atlas-heading">
        <span>Project workflow</span>
        <span className="diagram-hint">Select a part to explore</span>
      </div>
      <div className="atlas-canvas">
        <svg
          className="atlas-connections"
          viewBox="0 0 1000 270"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <marker
              id="atlas-arrow"
              markerWidth="7"
              markerHeight="7"
              refX="6"
              refY="3.5"
              orient="auto"
            >
              <path d="M0 0L7 3.5L0 7" fill="none" stroke="currentColor" />
            </marker>
          </defs>
          <motion.path
            d="M 125 135 H 360 M 485 135 H 625 M 750 135 H 870"
            initial={false}
            animate={{ pathLength: 1 }}
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
            markerEnd="url(#atlas-arrow)"
          />
          <path
            d="M 875 169 V 245 H 395 V 172"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 5"
            fill="none"
            markerEnd="url(#atlas-arrow)"
          />
        </svg>
        <svg
          className="atlas-connections-mobile"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <marker
              id="atlas-mobile-arrow"
              markerWidth="3"
              markerHeight="3"
              refX="2.5"
              refY="1.5"
              orient="auto"
            >
              <path
                d="M0 0L3 1.5L0 3"
                fill="none"
                stroke="currentColor"
                strokeWidth=".4"
              />
            </marker>
          </defs>
          <path
            d="M43 26.5H52 M73 43V50 M52 67.5H47"
            fill="none"
            stroke="currentColor"
            strokeWidth=".3"
            markerEnd="url(#atlas-mobile-arrow)"
          />
          <path
            d="M27 84V88H97V5H73V9"
            fill="none"
            stroke="currentColor"
            strokeWidth=".3"
            strokeDasharray="1 1.2"
            markerEnd="url(#atlas-mobile-arrow)"
          />
        </svg>
        <div className="atlas-origin">
          <FileText size={23} strokeWidth={1.3} />
          <strong>A question</strong>
          <span>
            What are we trying <br />
            to achieve?
          </span>
        </div>
        <div className="atlas-map">
          <div className="map-stack" aria-hidden="true">
            <span />
            <span />
          </div>
          <button
            className={`atlas-node ${selected === "context" ? "selected" : ""}`}
            onClick={() => setSelected("context")}
            aria-pressed={selected === "context"}
          >
            <Folder size={22} strokeWidth={1.3} />
            <strong>Context</strong>
            <span>Brief · decisions · sources</span>
          </button>
        </div>
        <button
          className={`atlas-node ${selected === "work" ? "selected" : ""}`}
          onClick={() => setSelected("work")}
          aria-pressed={selected === "work"}
        >
          <span className="work-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <strong>Work</strong>
          <span>Build · analyze · write</span>
        </button>
        <button
          className={`atlas-node ${selected === "evidence" ? "selected" : ""}`}
          onClick={() => setSelected("evidence")}
          aria-pressed={selected === "evidence"}
        >
          <Check size={23} strokeWidth={1.3} />
          <strong>Evidence</strong>
          <span>Check · review · retain</span>
        </button>
        <span className="return-label">Update decisions and evidence</span>
      </div>
      <figcaption className="atlas-caption" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selected}
            initial={{ opacity: reduced ? 1 : 0.3, y: reduced ? 0 : 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: reduced ? 1 : 0 }}
            transition={{ duration: 0.18 }}
          >
            <strong>{info[selected].title}</strong>
            <span>{info[selected].description}</span>
          </motion.div>
        </AnimatePresence>
        <span className="caption-tag">A working convention</span>
      </figcaption>
    </figure>
  );
}

const folders = [
  {
    id: "docs",
    title: "The project's memory",
    path: "docs/",
    description:
      "Intent, decisions, plans, and the evidence worth keeping. A short agent map points to the right document, instead of loading everything at once.",
    files: [
      "design-docs/",
      "exec-plans/",
      "product-specs/",
      "references/",
      "WORKFLOW.md",
      "QUALITY_SCORE.md",
    ],
    note: "Maintained knowledge",
  },
  {
    id: "analysis",
    title: "Space to investigate",
    path: "analysis/ + data/",
    description:
      "Keep original inputs separate from experiments. Record where data came from, what it means, and how to reproduce the result.",
    files: [
      "data/README.md",
      "data/manifest.md  ← when inputs arrive",
      "analysis/README.md",
      "Queries and notebooks  ← as needed",
    ],
    note: "Inputs and working material",
  },
  {
    id: "outputs",
    title: "A home for the result",
    path: "reports/ + presentations/ + outputs/",
    description:
      "Keep the deliverable and its editable source together. Name variants by purpose, and make the selected result easy to find.",
    files: [
      "reports/",
      "presentations/",
      "outputs/",
      "src/ or apps/  ← when code exists",
    ],
    note: "Deliverables, with provenance",
  },
];

// Adapted from Motion Primitives Pro Feature 1 (licensed) and the supplied Noir accordion.
// A controlled accordion synchronizes the adjacent visual. Project-specific content and semantics.
export function RepositoryExplorer() {
  const [active, setActive] = useState("docs");
  const reduced = useReducedMotion();
  const current = folders.find((f) => f.id === active)!;
  return (
    <div className="repository-explorer">
      <div className="explorer-controls">
        {folders.map((f) => (
          <div
            className="explorer-item"
            key={f.id}
            data-expanded={active === f.id}
          >
            <h3>
              <button
                id={`folder-trigger-${f.id}`}
                aria-expanded={active === f.id}
                aria-controls={`folder-panel-${f.id}`}
                onClick={() => setActive(f.id)}
              >
                <span>{f.title}</span>
                <motion.span
                  animate={{ rotate: active === f.id ? 45 : 0 }}
                  transition={{ duration: reduced ? 0 : 0.2 }}
                >
                  <Plus size={19} />
                </motion.span>
              </button>
            </h3>
            <div
              id={`folder-panel-${f.id}`}
              role="region"
              aria-labelledby={`folder-trigger-${f.id}`}
              hidden={active !== f.id}
            >
              <motion.div
                initial={false}
                animate={{ opacity: active === f.id ? 1 : 0 }}
                transition={{ duration: reduced ? 0 : 0.2 }}
              >
                <p>{f.description}</p>
                <code>{f.path}</code>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      <div className="file-view" aria-live="polite">
        <div className="file-view-top">
          <Folder size={18} />
          <span>your-project/</span>
          <span className="file-view-note">The scaffold</span>
        </div>
        <div className="file-root">
          <span>AGENTS.md</span>
          <span>ARCHITECTURE.md</span>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: reduced ? 1 : 0 }}
            transition={{ duration: 0.16 }}
          >
            <div className="folder-selected">
              <Folder size={17} />
              {current.path}
            </div>
            <ul>
              {current.files.map((f) => (
                <li key={f}>
                  <span aria-hidden="true" className="tree-branch" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="file-note">{current.note}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function WorkingLoop() {
  const [active, setActive] = useState("inspect");
  const reduced = useReducedMotion();
  const i = loopSteps.findIndex((s) => s.id === active);
  const step = loopSteps[i];
  return (
    <figure className="working-loop">
      <div
        className="loop-stages"
        role="group"
        aria-label="Working loop stages"
      >
        {loopSteps.map((s, index) => (
          <button
            key={s.id}
            aria-pressed={active === s.id}
            onClick={() => setActive(s.id)}
          >
            <span className="step-number">{index + 1}</span>
            {s.title}
          </button>
        ))}
      </div>
      <div className="loop-detail" aria-live="polite">
        <div className="loop-figure" aria-hidden="true">
          <div className="loop-orbit">
            <svg viewBox="0 0 280 220" preserveAspectRatio="none">
              <path
                d="M50 110C50 20 230 20 230 110S50 200 50 110"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 5"
              />
            </svg>
            <motion.div
              className="orbit-dot"
              initial={false}
              animate={{
                left: [17.86, 50, 82.14, 72.73, 27.27][i] + "%",
                top: [50, 19.32, 50, 71.7, 71.7][i] + "%",
              }}
              transition={{ duration: reduced ? 0 : 0.5, type: "tween" }}
            />
            <div className="orbit-center">
              <span>{step.node}</span>
              <ArrowRight size={23} />
            </div>
          </div>
        </div>
        <div className="loop-copy">
          <h3>{step.body}</h3>
          <p>{step.detail}</p>
          <div className="evidence-line">
            <ArrowDown size={16} />
            <span>{step.artifact}</span>
          </div>
        </div>
      </div>
      <figcaption>
        Fix actionable failures and rerun affected checks. If repeated attempts
        fail, record what is missing and stop that loop.
      </figcaption>
    </figure>
  );
}
