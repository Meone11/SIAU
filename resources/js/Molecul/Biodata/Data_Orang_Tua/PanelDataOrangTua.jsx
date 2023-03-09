import HeaderDataOrangTua from "@/Atoms/Biodata/HeaderDataOrangTua";
import { LabelDataOrangTua } from "@/Atoms/Biodata/LabelDataOrangTua";
import React from "react";

function PanelDataOrangTua() {
    return (
        <div className="flex flex-col gap-2 mx-5">
            <HeaderDataOrangTua />
            <hr
                className="h-px my-1 md:my-2 w-full bg-gray-200 border-0 dark:bg-gray-700"
                color="black"
            />
            <div className="cals">
                {LabelDataOrangTua?.map((item, index) => (
                    <div className="flex flex-row gap-2" key={index}>
                        <div className="flex flex-col w-[14rem] leading-10 md:w-full md:leading-[2rem] md:text-xl">
                            <h2 className="text-left font-medium text-base">
                                {item.Name}
                            </h2>
                        </div>
                        <div className="flex flex-col w-[14rem] leading-10 md:w-full md:leading-[2rem] md:text-xl">
                            <h2 className="text-left">{item.Value}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PanelDataOrangTua;
