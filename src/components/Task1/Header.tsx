import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
    return (
        <>
            <div className="my-2">
                <span className="text-gray-600">
                    Keyword Explorer
                    {" > "}
                </span>
                Keyword Overview
            </div>
            <div className="text-xl font-semibold">
                Keyword:{" "}
                <span className="text-gray-500">shopping in barcelona</span>
            </div>
            <div className="text-gray-600">Database: United States 🇺🇸</div>
        </>
    );
};
