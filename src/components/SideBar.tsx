import React from "react";
import {
    ChefIcon,
    CloseIcon,
    CollapseIcon,
    DashboardIcon,
    InfoIcon,
    Logo,
    MapIcon,
    ShoppingCartIcon,
    SignalIcon,
    StarIcon,
} from "src/icons";
import FunnelIcon from "src/icons/FunnelIcon";
import { Button } from "src/ui/Button";
import { NavLink } from "src/ui/NavLink";

interface props {}

const links1 = [
        { icon: <DashboardIcon />, name: "Dashboard" },
        { icon: <ChefIcon />, name: "Recipes" },
    ],
    links2 = [
        { icon: <InfoIcon />, name: "Blog" },
        { icon: <StarIcon size={20} />, name: "Templates" },
        { icon: <FunnelIcon />, name: "Integrations" },
    ],
    links3 = [
        { icon: <MapIcon />, name: "Product Roadmap" },
        { icon: <SignalIcon />, name: "What's New?" },
    ];

export const SideBar: React.FC<props> = () => {
    return (
        <div className="w-64 bg-white border-r border-gray-300 flex-c">
            <Logo className="m-4" />
            <div className="w-full px-4 py-3 mb-2 bg-gray-100">
                <div className="text-sm text-gray-500">Project</div>
                <div>My first project</div>
            </div>
            <div className="p-2">
                {links1.map((link, idx) => (
                    <NavLink href={""} key={idx} {...link} />
                ))}
            </div>
            <hr />
            <div className="p-2">
                {links2.map((link, idx) => (
                    <NavLink href={""} key={idx} {...link} />
                ))}
            </div>
            <div className="flex-grow" />
            <div className="p-2 m-1 border rounded-md bg-emerald-100 border-emerald-300">
                <div className="items-center mb-3 space-x-2 f">
                    <div className="text-white bg-indigo-600 rounded-full c h-9 w-9">
                        ks
                    </div>
                    <div className="font-semibold text-gray-700">
                        kritikalpa.saha
                        <span className="block text-sm font-normal text-gray-600">
                            Credit Used: 313.2
                        </span>
                    </div>
                </div>
                <Button
                    icon={<ShoppingCartIcon />}
                    btn="success"
                    className="!justify-start w-full gap-3 my-1"
                >
                    Change Plan
                </Button>
                {links3.map(({ icon, name }, idx) => (
                    <div
                        key={idx}
                        className={[
                            "flex items-center px-2 [&>svg]:mr-3 py-2.5 cursor-pointer w-full hover:underline transition duration-300 rounded-lg text-gray-700",
                        ].join(" ")}
                    >
                        {icon}
                        {name}
                    </div>
                ))}
            </div>
            <div className="items-center gap-2 px-4 py-3 f">
                <CollapseIcon /> Collapse
            </div>
        </div>
    );
};
