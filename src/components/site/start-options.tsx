"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CopyBlock } from "./copy-block";
import { projectKinds } from "../../lib/project";
export function StartOptions({ cli = false }: { cli?: boolean }) {
  return (
    <Tabs defaultValue="analysis">
      <TabsList aria-label="Project type">
        {projectKinds.map((p) => (
          <TabsTrigger value={p.id} key={p.id}>
            {p.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {projectKinds.map((p) => (
        <TabsContent key={p.id} value={p.id}>
          <CopyBlock
            prose={!cli}
            label={cli ? "Terminal" : "Prompt for your agent"}
            text={
              cli
                ? `python3 scripts/scaffold.py ../${p.directory} \\\n  --kind ${p.id} \\\n  --name "${p.name}" \\\n  --brief "${p.brief}"`
                : p.prompt
            }
          />
          <p className="first-task">
            <strong>Then, begin with the work.</strong> {p.first}
          </p>
        </TabsContent>
      ))}
    </Tabs>
  );
}
