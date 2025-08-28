import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";


type ThemeMode = "light" | "dark" | "system";


type ThemeContextValue = {
mode: ThemeMode;
setMode: (m: ThemeMode) => void;
isDark: boolean;
};


const ThemeContext = createContext<ThemeContextValue | null>(null);


const STORAGE_KEY = "bui.theme";


function getSystemPrefersDark() {
if (typeof window === "undefined") return false;
return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}


function applyClass(mode: ThemeMode) {
const root = typeof document !== "undefined" ? document.documentElement : null;
if (!root) return;
const dark = mode === "dark" || (mode === "system" && getSystemPrefersDark());
root.classList.toggle("dark", dark);
}


export function ThemeProvider({ children, defaultMode = "system" as ThemeMode }: { children: React.ReactNode; defaultMode?: ThemeMode; }) {
const [mode, setModeState] = useState<ThemeMode>(() => {
if (typeof window === "undefined") return defaultMode;
return (localStorage.getItem(STORAGE_KEY) as ThemeMode) || defaultMode;
});


useEffect(() => { applyClass(mode); localStorage.setItem(STORAGE_KEY, mode); }, [mode]);
useEffect(() => {
if (mode !== "system") return;
const mq = window.matchMedia("(prefers-color-scheme: dark)");
const handler = () => applyClass("system");
mq.addEventListener?.("change", handler);
return () => mq.removeEventListener?.("change", handler);
}, [mode]);


const setMode = useCallback((m: ThemeMode) => setModeState(m), []);
const isDark = useMemo(() => (mode === "dark" || (mode === "system" && getSystemPrefersDark())), [mode]);


const value = useMemo(() => ({ mode, setMode, isDark }), [mode, setMode, isDark]);
return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}


export function useTheme() {
const ctx = useContext(ThemeContext);
if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
return ctx;
}
