import DataOrangTua from "@/Organism/Biodata/DataOrangTua";
import DataPribadi from "@/Organism/Biodata/DataPribadi";
import SidebarSetting from "@/Organism/SidebarSetting";
import React from "react";

function Biodata() {
    return (
        <div className="flex h-screen">
            <SidebarSetting open={open} />
            <div className="w-full h-full flex flex-col gap-20 px-6 py-10 md:py-14 md:px-20 md:gap-12">
                <DataPribadi />
                <DataOrangTua />
            </div>
        </div>
    );
}

export default Biodata;
