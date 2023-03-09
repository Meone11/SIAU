import StatusPerkawinan1 from "@/Atoms/Biodata/StatusPerkawinan1";
import StatusPerkawinan2 from "@/Atoms/Biodata/StatusPerkawinan2";
import React from "react";

function StatusPerkawinan() {
    return (
        <div className="flex flex-row gap-[7.5rem] md:gap-[13.8rem] mx-5">
            <StatusPerkawinan1 />
            <StatusPerkawinan2 />
        </div>
    );
}

export default StatusPerkawinan;
