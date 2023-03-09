import IconRefresh from "@/Atoms/SimKuliah/IconRefresh";
import LabelRefresh from "@/Atoms/SimKuliah/LabelRefresh";
import React from "react";

function RefreshButton() {
    return (
        <div className="flex items-center bg-emerald-300 w-32 justify-center h-10 rounded-lg">
            <IconRefresh />
            <LabelRefresh />
        </div>
    );
}

export default RefreshButton;
