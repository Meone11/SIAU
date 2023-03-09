import React from "react";

const SettingTextField = ({ open }) => {
    return (
        <h2
            className={`whitespace-pre duration-500 font-medium text-sm ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
            }`}
        >
            Setting
        </h2>
    );
};

export default SettingTextField;
