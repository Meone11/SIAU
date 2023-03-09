import React, { useState } from "react";
import UskLogo from "@/Atoms/Sidebar/UskLogo";
import SIAUText from "@/Atoms/Sidebar/SIAUText";

const NavSidebar = ({ open }) => {
    return (
        <div className="flex gap-x-4 items-center">
            <UskLogo open={open} />
            <SIAUText open={open} />
        </div>
    );
};

export default NavSidebar;
