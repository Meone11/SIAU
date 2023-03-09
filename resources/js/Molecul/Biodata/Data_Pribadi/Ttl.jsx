import Ttl1 from "@/Atoms/Biodata/Ttl1";
import Ttl2 from "@/Atoms/Biodata/Ttl2";
import React from "react";

function Ttl() {
    return (
        <div className="flex flex-row gap-[6.6rem] md:gap-[12rem] mx-5">
            <Ttl1 />
            <Ttl2 />
        </div>
    );
}

export default Ttl;
