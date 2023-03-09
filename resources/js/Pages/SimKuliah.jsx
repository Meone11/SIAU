import SideBar from "@/Organism/SideBar";
import RefreshBar from "@/Organism/SimKuliah/RefreshBar";
import TableMataKuliah from "@/Organism/SimKuliah/TableMataKuliah";
import React from "react";

function SimKuliah() {
    return (
        <div className="flex h-screen">
            <div className="h-screen">
                <SideBar />
            </div>
            <div className="flex h-screen w-screen p-6 flex-col gap-10">
                <RefreshBar />
                <TableMataKuliah />
            </div>
        </div>
    );
}

export default SimKuliah;
