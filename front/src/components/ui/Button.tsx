import { LucideIcon } from "lucide-react";
import { Link } from "react-router";

type Size = "small" | "medium" | "large";
type IconPosition = "left" | "right";

type ButtonProps = (React.ComponentProps<typeof Link> | React.ComponentProps<"button">) & {
    to?: string;
    className?: string;
    size?: Size;
    icon?: LucideIcon;
    iconPosition?: IconPosition;
};

const sizeClasses: Record<Size, string> = {
    small: " px-3 py-3",
    medium: "h-40 px-4 py-5",
    large: "h-56 px-6 py-6 text-base",
};

export function Button({
    children,
    icon: Icon,
    iconPosition = "left",
    className = "",
    size = "medium",
    to,
    ...props
}: ButtonProps) {
    const classes = `bg-white/20 cursor-pointer border border-black/10 rounded-2xl font-medium hover:bg-white/40 active:scale-95 transition-all flex items-center justify-center leading-snug ${sizeClasses[size]} ${className}`;

    const content = (
        <span className="flex justify-center gap-2.5 items-center">
            {Icon && iconPosition === "left" && <Icon className="md:size-7 size-4" />}
            {children}
            {Icon && iconPosition === "right" && <Icon className="md:size-7 size-4" />}
        </span>
    );

    if (to) {
        return (
            <Link
                to={to}
                className={classes}
                {...(props as React.ComponentProps<typeof Link>)}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            className={classes}
            {...(props as React.ComponentProps<"button">)}
        >
            {content}
        </button>
    );
}