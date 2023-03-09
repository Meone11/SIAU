import React from "react";
import { useState } from "react";
import { Link } from "@inertiajs/react";
import { MenuKrs } from "@/Atoms/Sidebar/MenuKrs";
import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";

const MenuKrsBar = ({ open }) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const handleClick = (e) => {
        e.preventDefault(); //Handle untuk menahan
        setSubMenuOpen(!subMenuOpen);
    };
    return (
        <div className="mt-4 flex flex-col gap-4 relative">
            {MenuKrs?.map((menu, i) => (
                <>
                    <Link
                        to={menu?.id}
                        key={i}
                        className={`flex items-center text-sm gap-4 font-medium p-2 
                        hover:bg-emerald-300 rounded-md md:hover:bg-emerald-300 ${
                            open ? "mx-5" : "mx-1"
                        }
                        `}
                        onClick={menu.name === "KRS" ? handleClick : ""}
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
                        {menu.subMenus && (
                            <div className="flex justify-end mx-16">
                                {subMenuOpen ? (
                                    <HiChevronUp
                                        style={{
                                            transitionDelay: `${0.8}00ms`,
                                        }}
                                        className={`duration-500 whitespace-pre${
                                            !open &&
                                            "overflow-hidden translate-x-28 opacity-0"
                                        }`}
                                    />
                                ) : (
                                    <HiChevronDown
                                        style={{
                                            transitionDelay: `${0.8}00ms`,
                                        }}
                                        className={`duration-500 whitespace-pre ${
                                            !open &&
                                            "overflow-hidden translate-x-28 opacity-0"
                                        }`}
                                    />
                                )}
                            </div>
                        )}
                    </Link>
                    <div className=" flex">
                        {menu.subMenus && subMenuOpen && open && (
                            <div>
                                {menu.subMenus.map((subLink, i) => (
                                    <div
                                        key={i}
                                        className={`flex flex-row px-5 cursor-pointer bg-emerald-300 
                                        hover:bg-emerald-200 gap-4 mx-10 p-2 rounded-lg w-44 ${
                                            subMenuOpen && "duration-500"
                                        }`}
                                    >
                                        <h1>{subLink.name}</h1>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </>
            ))}
        </div>
    );
};
export default MenuKrsBar;
