import Telepon1 from "@/Atoms/Biodata/Telepon1";
import Telepon2 from "@/Atoms/Biodata/Telepon2";
import React from "react";

function Telepon() {
    return (
        <div className="flex flex-row gap-[11.6rem] md:gap-[19.1rem] mx-5">
            <Telepon1 />
            <Telepon2 />
        </div>
    );
}

export default Telepon;
