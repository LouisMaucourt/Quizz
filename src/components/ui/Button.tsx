import { Link } from "react-router";

type LinkButton = React.ComponentProps<typeof Link> & { to: string };
type NativeButton = React.ComponentProps<"button"> & { to?: never };

type ButtonProps = (LinkButton | NativeButton) & { className?: string };

const baseClass = `bg-white/20 h-40 cursor-pointer border border-black/10 rounded-2xl px-4 py-5 text-sm font-medium hover:bg-white/40 active:scale-95 transition-all flex items-center justify-center leading-snug`;

export const Button = ({ children, className, ...props }: ButtonProps) => {
    if ("to" in props && props.to) {
        return (
            <Link {...(props as LinkButton)} className={`${baseClass} ${className ?? ""}`}>
                {children}
            </Link>
        );
    }
    return (
        <button {...(props as NativeButton)} className={`${baseClass} ${className ?? ""}`}>
            {children}
        </button>
    );
};