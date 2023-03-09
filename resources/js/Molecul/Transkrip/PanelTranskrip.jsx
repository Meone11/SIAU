import ButtonDownload from "@/Atoms/Transkrip/ButtonDownload";
import LabelTranskrip from "@/Atoms/Transkrip/LabelTranskrip";
import React from "react";

function PanelTranskrip() {
    return (
        <div className="flex items-center justify-between">
            <LabelTranskrip />
            <ButtonDownload />
        </div>
    );
}

export default PanelTranskrip;
