import React, { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary" | "add";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}

const variantStyles = {
    primary: "bg-purple-600 text-white",
    secondary: "bg-purple-300 text-purple-600",
    add: "bg-blue-700 text-white",
};

// const sizeStyles = {
//     sm: "py-1  px-2",
//     md: "py-2 px-4",
//     lg: "py-4  px-6",
// };

const sizeStyles = {
    sm: "py-1 px-2 text-sm",
    md: "sm:py-1 sm:px-2 sm:text-sm md:py-2 md:px-4 md:text-base",
    lg: "sm:py-2 sm:px-3 sm:text-base md:py-3 md:px-6 md:text-lg",
};


const Button:React.FC<ButtonProps> = (props) => {
    const hoverStyles = {
        primary: "hover:bg-purple-700",
        secondary: "hover:bg-purple-400 hover:text-white",
        add: "hover:bg-blue-800",
    } as const
    return (
        <button
            onClick={props.onClick}
            className={`rounded-md font-normal text-base ${variantStyles[props.variant]
                } ${sizeStyles[props.size]} ${props.fullWidth ? ' w-full' : 'w-fit'} transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${hoverStyles[props.variant] ?? ''}`}
        >
            <div className="flex items-center gap-2">
                {props.startIcon} <p className={`${props.fullWidth ? 'text-center mx-auto ' : ''}`}>{props.text}</p> {props.endIcon}
            </div>
        </button>
    );
};

export default Button;
