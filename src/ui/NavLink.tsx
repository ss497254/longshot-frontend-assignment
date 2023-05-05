import React from "react";
import NextLink from "next/link";

interface LinkProps {
    href: string;
    name: string;
    icon: React.ReactElement;
}

export const NavLink: React.FC<LinkProps> = ({ icon, name, href }) => {
    return (
        <NextLink href={href}>
            <div
                className={[
                    "flex items-center px-3 [&>svg]:mr-3 py-2.5 cursor-pointer w-full mb-2 transition duration-300 bg-white rounded-lg hover:bg-gray-200 text-gray-600",
                ].join(" ")}
            >
                {icon}
                {name}
            </div>
        </NextLink>
    );
};
