import React from "react";
import MassageIcon from "@/Atoms/Navbar/MassageIcon";
import UserIcon from "@/Atoms/Navbar/UserIcon";

function Navbar1() {
    return (
        <div className="flex justify-end">
            <MassageIcon />
            <UserIcon />
        </div>
    );
}

export default Navbar1;
