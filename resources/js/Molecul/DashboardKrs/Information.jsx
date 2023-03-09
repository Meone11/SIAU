import HeaderInformation from "@/Atoms/DashboardKrs/HeaderInformation";
import React from "react";

function Information() {
    return (
        <div className="w-full p-4 bg-gray-200 rounded-xl h-[20rem]">
            <HeaderInformation />
            <hr
                className="h-px md:my-2 w-full bg-gray-200 border-0 dark:bg-gray-700"
                color="black"
            />
        </div>
    );
}

export default Information;
