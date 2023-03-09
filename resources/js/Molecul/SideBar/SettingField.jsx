import React from "react";
import SettingIcon from "@/Atoms/Sidebar/SettingIcon";
import SettingTextField from "@/Atoms/Sidebar/SettingTextField";

const SettingField = ({ open }) => {
    return (
        <div
            className={`absolute bottom-5 gap-4 p-2 
                        hover:bg-emerald-300 rounded-md justify-start border flex items-center duration-500 ${
                            open ? "mx-4 w-56" : "mx-1 w-12"
                        }`}
        >
            <div>
                <SettingIcon />
            </div>

            <SettingTextField open={open} />
        </div>
    );
};

export default SettingField;
