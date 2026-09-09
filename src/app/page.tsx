import { AnimatedGroup } from "../components/animated-group";

const repo = "https://github.com/spencerthomas/starter";

export default function Home() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">Skip to content</a>
      <header>
        <a className="wordmark" href="https://www.tomspencer.co">Tom Spencer</a>
        <a className="quiet-link" href={repo}>GitHub <span aria-hidden="true">↗</span></a>
      </header>

      <main id="main">
        <AnimatedGroup>
          <section aria-labelledby="title">
            <h1 id="title">Starter</h1>
            <p className="subtitle">A small starting point for working with agents.</p>
            <p>A repository for code, analysis, and knowledge work. A place for the context, the work in progress, and whatever comes out of it.</p>
            <p>Start with a question. Let the structure grow with the project.</p>
            <nav className="actions" aria-label="Get started">
              <a href={`${repo}/generate`}>Use the template <span aria-hidden="true">↗</span></a>
              <a className="quiet-link" href={`${repo}#start-a-project`}>Read the guide <span aria-hidden="true">↗</span></a>
            </nav>
          </section>

          <section aria-labelledby="inside">
            <h2 id="inside">A little structure, from the start</h2>
            <p>A short map for your agents. Shared docs for decisions and plans. Homes for data, analysis, reports, presentations, and outputs. Simple checks to keep it all connected.</p>
            <p>Works with Codex and Claude. No application stack chosen for you.</p>
          </section>

          <section aria-labelledby="begin">
            <h2 id="begin">Give your agent a starting point</h2>
            <p>Point it at the repo, or install the starter skill once. Then ask:</p>
            <div className="prompts">
              <p>“Use the starter for a data analysis project.”</p>
              <p>“Scaffold a product feature I’m exploring.”</p>
              <p>“Set up a research report and a presentation.”</p>
            </div>
          </section>

          <p className="source-note">Inspired by <a href="https://openai.com/index/harness-engineering/">harness engineering</a>: give agents a map, keep knowledge in the repo, and make the next run a little better.</p>
        </AnimatedGroup>
      </main>

      <footer><span>A starter, by <a href="https://www.tomspencer.co">Tom Spencer</a>.</span><a href={repo}>View source <span aria-hidden="true">↗</span></a></footer>
    </div>
  );
}
