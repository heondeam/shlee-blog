import React, { forwardRef } from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <button ref={ref} {...props}>
                {children}
            </button>
        );
    }
);

export default Button;
