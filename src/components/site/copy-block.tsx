"use client";
import { useState, useEffect, useRef } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "../ui/button";
export function CopyBlock({
  text,
  label = "Command",
  prose = false,
}: {
  text: string;
  label?: string;
  prose?: boolean;
}) {
  const [status, setStatus] = useState<"ready" | "copied" | "error">("ready");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setStatus("ready"), 2200);
    } catch {
      setStatus("error");
    }
  }
  return (
    <div className={`copy-block ${prose ? "copy-prose" : ""}`}>
      <div className="copy-toolbar">
        <span>{label}</span>
        <Button
          variant="ghost"
          size="small"
          onClick={copy}
          aria-label={`Copy ${label.toLowerCase()}`}
        >
          {status === "copied" ? <Check size={15} /> : <Copy size={15} />}
          <span>{status === "copied" ? "Copied" : "Copy"}</span>
        </Button>
      </div>
      <pre tabIndex={0}>
        <code>{text}</code>
      </pre>
      <span
        className={status === "error" ? "copy-error" : "sr-only"}
        role="status"
      >
        {status === "copied"
          ? "Copied to clipboard."
          : status === "error"
            ? "Couldn’t copy. Select the text and copy it manually."
            : ""}
      </span>
    </div>
  );
}
