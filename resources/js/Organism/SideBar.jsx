import React from "react";
import { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import { HiMenuAlt2 } from "react-icons/hi";
import NavSidebar from "@/Molecul/NavSidebar";
import ProfileImg from "@/Atoms/ProfileImg";
import UserNameField from "@/Atoms/UserNameField";
import UserProfile from "@/Molecul/UserProfile";
import MenuBar from "@/Molecul/MenuBar";
import SettingField from "@/Molecul/SettingField";

const SideBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={` ${
                !open ? "w-14" : "w-64"
            } duration-500 bg-emerald-400 relative h-screen md:max-h-full`}
        >
            <div className="flex gap-x-6 p-2 pt-5 items-center justify-end">
                <NavSidebar open={open} />
                <div className="mr-2">
                    <HiMenuAlt2
                        size={20}
                        className="cursor-pointer origin-right"
                        onClick={() => setOpen(!open)}
                    />
                </div>
            </div>
            <hr className={`${open ? "w-56" : "w-10"} mx-3 duration-500`} />
            <div className={`flex gap-x-6 p-2 pt-5 items-center justify-start`}>
                <UserProfile open={open} />
            </div>
            <MenuBar open={open} />
            <div
                className={`absolute bottom-5 hover:bg-emerald-300 rounded-md ${
                    open ? "mx-4 w-56" : "mx-1"
                }`}
            >
                <SettingField open={open} />
            </div>
        </div>
    );
};

export default SideBar;
