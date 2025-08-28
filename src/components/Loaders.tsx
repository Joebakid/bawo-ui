import React from "react";
import { cn } from "../utils/cn";


export function Spinner({ size = 20, className }: { size?: number; className?: string }) {
const border = Math.max(2, Math.round(size / 10));
return (
<span
className={cn("inline-block animate-spin rounded-full border-solid border-t-transparent", className)}
style={{ width: size, height: size, borderWidth: border, borderColor: "var(--bui-border)", borderTopColor: "transparent" }}
aria-label="Loading"
role="status"
/>
);
}


export function Dots({ className }: { className?: string }) {
return (
<span className={cn("inline-flex items-center gap-1", className)} aria-label="Loading">
<span className="inline-block h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:-200ms]" />
<span className="inline-block h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:-100ms]" />
<span className="inline-block h-2 w-2 rounded-full bg-gray-400 animate-bounce" />
</span>
);
}