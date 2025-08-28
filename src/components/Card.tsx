import React from "react";
import { cn } from "../utils/cn";


export function Card({ className, children }: { className?: string; children?: React.ReactNode }) {
return <div className={cn("bui-card", className)}>{children}</div>;
}


export function CardHeader({ className, children }: { className?: string; children?: React.ReactNode }) {
return <div className={cn("mb-2 font-semibold", className)}>{children}</div>;
}


export function CardContent({ className, children }: { className?: string; children?: React.ReactNode }) {
return <div className={cn("text-sm", className)}>{children}</div>;
}