import { ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  icon,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium transition duration-200",

        {
          
          "bg-primary text-white hover:bg-red-700": variant === "primary",

          "bg-blue-600 text-white hover:bg-blue-700":
            variant === "secondary",

          "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white":
            variant === "outline",

          "text-red-600 hover:bg-red-50": variant === "ghost",
        },

        className
      )}
    >
      {children}
      {icon && icon}
    </button>
  );
}
