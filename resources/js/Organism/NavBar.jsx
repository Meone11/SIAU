import React from "react";
import Navbar1 from "@/Molecul/NavBar/Navbar1";
import BackIcon from "@/Atoms/Navbar/BackIcon";

function NavBar() {
    return (
        <div className="bg-gray-200 w-full h-20 rounded-lg shadow-2xl flex items-center justify-between">
            <BackIcon />
            <Navbar1 />
        </div>
    );
}

export default NavBar;
