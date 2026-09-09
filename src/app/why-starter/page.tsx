import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  essaySections,
  essayTitle,
  essayDeck,
  essayLead,
  essayAttribution,
  essayClosing,
} from "../../lib/essay";
import { ProjectAtlas, WorkingLoop } from "../../components/site/diagrams";
export const metadata: Metadata = {
  title: `${essayTitle} — Starter`,
  description:
    "How Starter uses repository documentation, scoped agent instructions, and structural checks.",
  alternates: { canonical: "/why-starter" },
};
export default function Essay() {
  const minutes = Math.ceil(
    [
      essayDeck,
      essayLead,
      essayAttribution,
      ...essaySections.flatMap((s) => s.paragraphs),
      essayClosing,
    ]
      .join(" ")
      .split(/\s+/).length / 220,
  );
  return (
    <main id="main" className="essay-page page-width">
      <header className="essay-header">
        <h1>{essayTitle}.</h1>
        <p className="essay-deck">{essayDeck}</p>
        <div className="byline">
          <span>Starter documentation</span>
          <span>Updated September 9, 2026</span>
          <span>About {minutes} min read</span>
        </div>
      </header>
      <ProjectAtlas />
      <div className="article-layout">
        <aside className="contents">
          <span>In this essay</span>
          {essaySections.map((s) => (
            <a href={`#${s.id}`} key={s.id}>
              {s.title.replace(/\.$/, "")}
            </a>
          ))}
          <a href="#sources">Sources & further reading</a>
        </aside>
        <article className="article-prose">
          <p className="article-lead">{essayLead}</p>
          <p>
            The approach adapts ideas from Ryan Lopopolo’s{" "}
            <a href="https://openai.com/index/harness-engineering/">
              harness engineering article at OpenAI
            </a>
            . Starter applies them to code, analysis, research, reports, and
            presentations, while leaving project-specific tools and
            implementation choices open.
          </p>
          {essaySections.map((s) => (
            <section id={s.id} key={s.id}>
              <h2>{s.title}</h2>
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 45)}>{p}</p>
              ))}
              {s.id === "the-loop" && <WorkingLoop />}
            </section>
          ))}
          <section className="article-sources" id="sources">
            <h2>Sources & further reading.</h2>
            <a href="https://openai.com/index/harness-engineering/">
              <span>
                <strong>Harness engineering</strong>
                <small>Ryan Lopopolo · OpenAI · February 2026</small>
              </span>
              <ArrowUpRight size={18} />
            </a>
            <a href="https://github.com/spencerthomas/harness-engineering">
              <span>
                <strong>Harness engineering reference collection</strong>
                <small>Background, interpretations, and source material</small>
              </span>
              <ArrowUpRight size={18} />
            </a>
            <a href="https://github.com/spencerthomas/starter/blob/codex/starter-template-workflow/reports/harness-workflow-review.md">
              <span>
                <strong>The section-by-section review</strong>
                <small>
                  Source diagrams, adaptations, and implementation limits
                </small>
              </span>
              <ArrowUpRight size={18} />
            </a>
            <a href="https://github.com/spencerthomas/starter/tree/codex/starter-template-workflow/template">
              <span>
                <strong>The project template</strong>
                <small>The defaults used to generate a new project</small>
              </span>
              <ArrowUpRight size={18} />
            </a>
          </section>
          <div className="article-close">
            <h2>Create a project.</h2>
            <p>{essayClosing}</p>
            <Link className="text-link" href="/getting-started">
              Get started <ArrowRight size={17} />
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
