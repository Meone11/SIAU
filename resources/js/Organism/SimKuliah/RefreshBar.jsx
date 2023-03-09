import LabelJadwal from "@/Atoms/SimKuliah/LabelJadwal";
import RefreshButton from "@/Molecul/SimKuliah/RefreshButton";
import React from "react";

function RefreshBar() {
    return (
        <div className="flex items-center bg-gray-200 h-fit w-full p-5 rounded-lg shadow-lg justify-between">
            <LabelJadwal />
            <RefreshButton />
        </div>
    );
}

export default RefreshBar;
