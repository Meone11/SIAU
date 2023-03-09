import PanelInformation from "@/Organism/DsahboardKrs/PanelInformation";
import PanelTableMK from "@/Organism/DsahboardKrs/PanelTableMK";
import PanelTimeLine from "@/Organism/DsahboardKrs/PanelTimeLine";
import SideBarKrs from "@/Organism/SidebarKrs";
import React from "react";

function DashboardKRS() {
    return (
        <div className="flex h-screen">
            <div>
                <SideBarKrs />
            </div>
            <div className="w-full p-8 flex flex-col md:flex md:flex-row md:gap-4 gap-10">
                <div className="flex flex-col gap-4 md:w-full md:h-full">
                    <PanelInformation />
                    <PanelTableMK />
                </div>
                <PanelTimeLine />
            </div>
        </div>
    );
}

export default DashboardKRS;
