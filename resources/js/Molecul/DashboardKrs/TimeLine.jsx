import HeaderTimeLine from "@/Atoms/DashboardKrs/HeaderTimeLine";
import React from "react";

function TimeLine() {
    return (
        <div className="w-full h-full p-6 bg-gray-200 rounded-xl">
            <HeaderTimeLine />
            <hr
                className="h-px md:my-2 w-full bg-gray-200 border-0 dark:bg-gray-700"
                color="black"
            />
        </div>
    );
}

export default TimeLine;
