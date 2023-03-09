import HeaderDataPribadi from "@/Atoms/Biodata/HeaderDataPribadi";
import React from "react";

function HeaderDP() {
    return (
        <div className="flex flex-col gap-2 mx-5">
            <HeaderDataPribadi />
            <hr
                className="h-px md:my-2 w-full bg-gray-200 border-0 dark:bg-gray-700"
                color="black"
            />
        </div>
    );
}

export default HeaderDP;
