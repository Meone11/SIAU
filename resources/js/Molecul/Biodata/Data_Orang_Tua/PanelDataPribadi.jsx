import HeaderDataPribadi from "@/Atoms/Biodata/HeaderDataPribadi";
import { LabelDataPribadi } from "@/Atoms/Biodata/LabelDataPribadi";
import React from "react";

function PanelDataPribadi() {
    return (
        <div className="flex flex-col gap-2 mx-5">
            <HeaderDataPribadi />
            <hr
                className="h-px my-1 md:my-2 w-full bg-gray-200 border-0 dark:bg-gray-700"
                color="black"
            />
            <div>
                {LabelDataPribadi?.map((item, index) => (
                    <div className="flex flex-row gap-4" key={index}>
                        <div className="flex flex-col w-[14rem] leading-10 md:text-xl md:w-full md:leading-[2rem]">
                            <h2 className="text-left font-medium text-base">
                                {item.Name}
                            </h2>
                        </div>
                        <div className="flex flex-col w-[14rem] text-base leading-10 md:text-xl md:w-full md:leading-[2rem]">
                            <h2 className="text-left">{item.Value}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PanelDataPribadi;
