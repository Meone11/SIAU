import React from "react";
import logo from "../../../public/unsyiah.png";

const UskLogo = ({ open }) => {
    return (
        <img
            src={logo}
            className={`cursor-pointer duration-500 ${
                open ? "overflow-hidden" : ""
            }`}
        />
    );
};

export default UskLogo;
