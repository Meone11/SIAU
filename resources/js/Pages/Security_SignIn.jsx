import SecurityPanel from "@/Organism/SecurityPanel";
import SideBar from "@/Organism/SideBar";
import React from "react";

function Security_SignIn() {
    return (
        <div className="flex h-screen">
            <div className="flex h-screen">
                <SideBar />
            </div>
            <div className="flex h-screen w-screen p-10 md:p-20">
                <SecurityPanel />
            </div>
        </div>
    );
}

export default Security_SignIn;
