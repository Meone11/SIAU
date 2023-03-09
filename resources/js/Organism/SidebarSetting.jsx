import React from "react";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import NavSidebar from "@/Molecul/SideBar/NavSidebar";
import UserProfile from "@/Molecul/SideBar/UserProfile";
import MenuSettingBar from "@/Molecul/SideBar/MenuSettingBar";
import SettingField from "@/Molecul/SideBar/SettingField";

function SidebarSetting() {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={` ${
                !open ? "w-14 relative" : "w-64 absolute"
            } duration-500 bg-emerald-400 h-full`}
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
            <div>
                <MenuSettingBar open={open} />
                <SettingField open={open} />
            </div>
        </div>
    );
}

export default SidebarSetting;
