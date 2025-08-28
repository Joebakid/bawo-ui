import React, { useState } from "react";
import { cn } from "../utils/cn";


export function CopyButton({ text, className, children }: { text: string; className?: string; children?: React.ReactNode; }) {
const [copied, setCopied] = useState(false);
async function copy() {
await navigator.clipboard.writeText(text);
setCopied(true);
setTimeout(() => setCopied(false), 1200);
}
return (
<button onClick={copy} className={cn("bui-btn", className)} aria-live="polite">
{copied ? (children ?? "✅ Copied") : (children ?? "📋 Copy")}
</button>
);
}