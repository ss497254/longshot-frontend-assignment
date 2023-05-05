import React from "react";

interface props extends React.ButtonHTMLAttributes<HTMLDivElement> {
    value: string;
    buttons: readonly string[];
    onClick: (tab: any) => void;
}

export const TabButtons: React.FC<props> = ({
    buttons,
    onClick,
    value,
    className,
}) => {
    return (
        <div
            className={["w-fit h-fit rounded-lg bg-gray-200", className].join(
                " "
            )}
        >
            {buttons.map((title, idx) => (
                <button
                    key={idx}
                    onClick={() => {
                        onClick(title);
                    }}
                    className={[
                        "py-1 px-3 last:rounded-r-lg  first:rounded-l-lg border-x",
                        value === title
                            ? "bg-blue-300 border border-blue-500"
                            : "last:border-r-0 first:border-l-0 border-gray-300",
                    ].join(" ")}
                >
                    {title}
                </button>
            ))}
        </div>
    );
};
