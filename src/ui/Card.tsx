import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div
            className={["p-4 bg-white rounded-lg shadow", className].join(" ")}
            {...props}
        >
            {children}{" "}
        </div>
    );
};
