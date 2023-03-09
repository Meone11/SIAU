import Email1 from "@/Atoms/Biodata/Email1";
import Email2 from "@/Atoms/Biodata/Email2";
import React from "react";

function Email() {
    return (
        <div className="flex flex-row gap-[12.5rem] md:gap-[20.3rem] mx-5">
            <Email1 />
            <Email2 />
        </div>
    );
}

export default Email;
