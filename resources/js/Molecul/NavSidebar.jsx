import React, { useState } from "react";
import SIAUText from "@/Atoms/SIAUText";
import SidebarButton from "@/Atoms/SidebarButton";
import UskLogo from "@/Atoms/UskLogo";

const NavSidebar = ({ open }) => {
    return (
        <div className="flex gap-x-4 items-center">
            <UskLogo open={open} />
            <SIAUText open={open} />
        </div>
    );
};

export default NavSidebar;
