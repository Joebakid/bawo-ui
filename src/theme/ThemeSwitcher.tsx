import React from "react";
import { useTheme } from "./ThemeProvider";
import { cn } from "../utils/cn";


export function ThemeSwitcher({ className }: { className?: string }) {
const { mode, setMode, isDark } = useTheme();
return (
<div className={cn("inline-flex items-center gap-2", className)}>
<button
type="button"
onClick={() => setMode(isDark ? "light" : "dark")}
className="bui-btn bui-btn-primary"
aria-label="Toggle theme"
title="Toggle light/dark"
>
{isDark ? "🌙 Dark" : "☀️ Light"}
</button>
<select
className="bui-btn"
aria-label="Theme mode"
value={mode}
onChange={(e) => setMode(e.target.value as any)}
>
<option value="light">Light</option>
<option value="dark">Dark</option>
<option value="system">System</option>
</select>
</div>
);
}