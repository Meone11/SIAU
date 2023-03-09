import LabelDownloadIjazah from "@/Atoms/Ijazah/LabelDownloadIjazah";
import React from "react";

function PanelDownloadIjazah() {
    return (
        <div className="flex p-3 flex-col gap-2 w-full h-full bg-gray-200 shadow-lg rounded-lg">
            <LabelDownloadIjazah />
            <hr
                className="h-px my-1 md:my-2 w-full bg-gray-200 border-0 dark:bg-gray-700"
                color="black"
            />
        </div>
    );
}

export default PanelDownloadIjazah;
