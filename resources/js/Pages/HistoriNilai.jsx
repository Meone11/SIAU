import TranskripNavBar from "@/Organism/Transkrip/TranskripNavBar";
import SideBarKrs from "@/Organism/SidebarKrs";
import React from "react";
import TableHistoriNilai from "@/Organism/TableHistoriNilai";

function HistoriNilai() {
    return (
        <div className="flex h-screen">
            <SideBarKrs />
            <div className="p-5 text-2xl font-semibold h-screen w-screen flex flex-col gap-6">
                <TranskripNavBar />
                <TableHistoriNilai />
            </div>
        </div>
    );
}

export default HistoriNilai;
