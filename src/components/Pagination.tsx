import React from "react";
import { cn } from "../utils/cn";


export type PaginationProps = {
page: number; // 1-based
total: number; // total items
pageSize: number; // items per page
onChange: (page: number) => void;
siblingCount?: number; // how many pages left/right of current
className?: string;
};


function range(start: number, end: number) { return Array.from({ length: end - start + 1 }, (_, i) => i + start); }


export function Pagination({ page, total, pageSize, onChange, siblingCount = 1, className }: PaginationProps) {
const totalPages = Math.max(1, Math.ceil(total / pageSize));
const clamped = Math.min(Math.max(1, page), totalPages);


const left = Math.max(1, clamped - siblingCount);
const right = Math.min(totalPages, clamped + siblingCount);


const pages = [] as (number | "ellipsis")[];
if (left > 1) pages.push(1);
if (left > 2) pages.push("ellipsis");
pages.push(...range(left, right));
if (right < totalPages - 1) pages.push("ellipsis");
if (right < totalPages) pages.push(totalPages);


return (
<nav className={cn("flex items-center gap-2", className)} aria-label="Pagination">
<button className="bui-btn" disabled={clamped === 1} onClick={() => onChange(clamped - 1)} aria-label="Previous">←</button>
{pages.map((p, i) => p === "ellipsis" ? (
<span key={`e-${i}`} className="px-2 text-sm text-gray-500">…</span>
) : (
<button
key={p}
className={cn("bui-btn", p === clamped && "bui-btn-primary")}
aria-current={p === clamped ? "page" : undefined}
onClick={() => onChange(p)}
>{p}</button>
))}
<button className="bui-btn" disabled={clamped === totalPages} onClick={() => onChange(clamped + 1)} aria-label="Next">→</button>
</nav>
);
}