import React from "react";
import SettingIcon from "@/Atoms/SettingIcon";
import SettingTextField from "@/Atoms/SettingTextField";

const SettingField = ({ open }) => {
    return (
        <div
            className={`flex items-center text-sm gap-4 font-medium p-2 
                        hover:bg-emerald-300 rounded-md justify-start`}
        >
            <SettingIcon />

            <SettingTextField open={open} />
        </div>
    );
};

export default SettingField;
