import React from "react";

const SIAUText = ({ open }) => {
    return (
        <h1
            className={`text-black font-semibold text-xl duration-500 ${
                !open && "overflow-hidden"
            }`}
        >
            SIA - USK
        </h1>
    );
};

export default SIAUText;
