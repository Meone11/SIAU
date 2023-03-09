import TranskripNavBar from "@/Organism/Transkrip/TranskripNavBar";
import SideBarKrs from "@/Organism/SidebarKrs";
import React from "react";
import TranskripActivity from "@/Organism/Transkrip/TranskripActivity";
import InfoTranskrip from "@/Organism/Transkrip/InfoTranskrip";

function Transkrip() {
    return (
        <div className="flex h-screen">
            <SideBarKrs />
            <div className="p-5 text-2xl font-semibold h-screen w-screen flex flex-col gap-6">
                <TranskripNavBar />
                <div className="flex flex-col gap-6 md:flex-row w-full">
                    <InfoTranskrip />
                    <TranskripActivity />
                </div>
            </div>
        </div>
    );
}

export default Transkrip;
