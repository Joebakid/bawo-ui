import React from "react";
import { cn } from "../utils/cn";


type Variant = "default" | "primary" | "outline" | "ghost";


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
variant?: Variant;
};


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
({ className, variant = "default", ...props }, ref) => {
const base = "bui-btn";
const variants: Record<Variant, string> = {
default: base,
primary: cn(base, "bui-btn-primary"),
outline: cn(base, "bg-transparent"),
ghost: cn(base, "border-transparent bg-transparent")
};
return <button ref={ref} className={cn(variants[variant], className)} {...props} />;
}
);
Button.displayName = "Button";