import React from "react";
import { Link } from "@inertiajs/react";
import { Menu } from "@/Atoms/Sidebar/Menu";

const MenuBar = ({ open }) => {
    return (
        <div className="mt-4 flex flex-col gap-4 relative">
            {Menu?.map((menu, i) => (
                <>
                    <Link
                        key={i}
                        className={`flex items-center text-sm gap-4 font-medium p-2 
                        hover:bg-emerald-300 rounded-md md:hover:bg-emerald-300 ${
                            open ? "mx-5" : "mx-1"
                        }
                        `}
                    >
                        <div>
                            {React.createElement(menu?.icon, {
                                size: "20",
                            })}
                        </div>
                        <h2
                            style={{
                                transitionDelay: `${i + 3}00ms`,
                            }}
                            className={`whitespace-pre duration-500 ${
                                !open &&
                                "opacity-0 translate-x-28 overflow-hidden"
                            }`}
                        >
                            {menu?.name}
                        </h2>
                    </Link>
                </>
            ))}
        </div>
    );
};
export default MenuBar;
