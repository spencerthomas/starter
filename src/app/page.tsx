import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  ProjectAtlas,
  RepositoryExplorer,
  WorkingLoop,
} from "../components/site/diagrams";
import { StartOptions } from "../components/site/start-options";

export default function Home() {
  return (
    <main id="main">
      <section className="hero page-width">
        <h1>
          A place for the <br />
          work to <span>grow.</span>
        </h1>
        <div className="hero-bottom">
          <p>
            A small starting point for working with agents.
            <br className="desktop-break" /> Keep the context, the work, and
            what you learn together.
          </p>
          <div className="hero-actions">
            <Button asChild>
              <Link href="/getting-started">
                Start a project <ArrowRight size={17} />
              </Link>
            </Button>
            <Link className="text-link" href="/why-starter">
              Read the idea <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <ProjectAtlas />
      </section>
      <section className="section page-width intro-section">
        <h2>
          A little structure. <br />A lot of room.
        </h2>
        <div className="intro-copy">
          <p className="large-copy">
            The project rarely arrives fully formed. Start with the question.
            Give the work somewhere to go.
          </p>
          <p>
            Starter creates a shared foundation for code, analysis, research,
            reports, and presentations. A short map guides your agents. A brief
            holds the intent. Your tools and your structure grow with the work.
          </p>
          <Link className="text-link" href="/why-starter">
            Why the environment matters <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="section page-width" id="inside">
        <div className="section-heading">
          <h2>
            Know where <br />
            everything belongs.
          </h2>
          <p>
            Separate the project's memory, the work in progress, and the result.
            Explore what each part holds.
          </p>
        </div>
        <RepositoryExplorer />
        <p className="section-footnote">
          No application stack chosen for you. Add code folders and dependencies
          when the work needs them.
        </p>
      </section>
      <section className="loop-section">
        <div className="page-width">
          <div className="section-heading">
            <h2>
              A small loop. <br />A better next run.
            </h2>
            <p>
              Give the agent an outcome and a way to check it. Keep the useful
              learning in the project.
            </p>
          </div>
          <WorkingLoop />
          <Link className="text-link" href="/why-starter#the-loop">
            How the working loop fits together <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="section page-width start-section">
        <div>
          <h2>
            Start with <br />
            your question.
          </h2>
          <p>
            Point Codex or Claude at the repository. <br />
            Choose a starting point, then make it yours.
          </p>
          <Link className="text-link" href="/getting-started">
            All the ways to get started <ArrowUpRight size={16} />
          </Link>
        </div>
        <StartOptions />
      </section>
      <section className="essay-invitation page-width">
        <div className="essay-invitation-art" aria-hidden="true">
          <svg viewBox="0 0 500 330" className="essay-vector">
            <g fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="45" y="42" width="410" height="242" rx="6" />
              <path d="M45 90H455M95 169H405M250 169V235H120" />
              <rect
                x="78"
                y="135"
                width="114"
                height="68"
                rx="4"
                fill="#e4eae0"
              />
              <rect
                x="214"
                y="135"
                width="114"
                height="68"
                rx="4"
                fill="#c8ddba"
              />
              <rect
                x="350"
                y="135"
                width="78"
                height="68"
                rx="4"
                fill="#e4eae0"
              />
              <path d="M200 164L205 169L200 174M336 164L341 169L336 174M125 230L120 235L125 240" />
            </g>
            <g fill="currentColor" fontSize="13">
              <text x="65" y="72">
                Project records
              </text>
              <text x="98" y="174">
                The question
              </text>
              <text x="236" y="174">
                The work
              </text>
              <text x="361" y="174">
                Evidence
              </text>
              <text x="165" y="265" fontSize="11">
                Record decisions and evidence.
              </text>
            </g>
          </svg>
        </div>
        <div>
          <h2>
            Project structure <br />
            for agent work.
          </h2>
          <p>
            How Starter organizes project context, agent instructions, and
            verification. Includes source references and implementation limits.
          </p>
          <Link className="text-link" href="/why-starter">
            Read the essay <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="source-strip page-width">
        <p>
          Built around the ideas in{" "}
          <a href="https://openai.com/index/harness-engineering/">
            OpenAI’s harness engineering article
          </a>
          , adapted for a smaller starting point.
        </p>
        <a href="/why-starter#sources">
          Sources & background <ArrowUpRight size={15} />
        </a>
      </section>
    </main>
  );
}
