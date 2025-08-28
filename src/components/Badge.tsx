import React from "react";
import { cn } from "../utils/cn";


export function Badge({ className, children }: { className?: string; children?: React.ReactNode }) {
return <span className={cn("bui-badge", className)}>{children}</span>;
}