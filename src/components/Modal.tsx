import React, { useEffect } from "react";
import { cn } from "../utils/cn";


export function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode; }) {
useEffect(() => {
function onKey(e: KeyboardEvent) { if (e.key === 'Escape') onClose(); }
document.addEventListener('keydown', onKey);
return () => document.removeEventListener('keydown', onKey);
}, [onClose]);


if (!open) return null;
return (
<div className="fixed inset-0 z-50 flex items-center justify-center">
<div className="absolute inset-0 bg-black/50" onClick={onClose} />
<div className={cn("relative z-10 bui-card w-full max-w-md")}>{children}</div>

</div>
);
}