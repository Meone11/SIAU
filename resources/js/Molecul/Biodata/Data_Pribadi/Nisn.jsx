import Nisn1 from "@/Atoms/Biodata/Nisn1";
import Nisn2 from "@/Atoms/Biodata/Nisn2";
import React from "react";

function Nisn() {
    return (
        <div className="flex flex-row items-center gap-[13rem] md:gap-[20.8rem] mx-5">
            <Nisn1 />
            <Nisn2 />
        </div>
    );
}

export default Nisn;
