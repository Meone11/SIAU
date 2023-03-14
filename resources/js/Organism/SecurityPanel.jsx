import { LabelDataSecurity } from "@/Atoms/Security/LabelDataSecurity";
import React from "react";

function SecurityPanel() {
    return (
        <div className=" bg-gray-200 h-fit w-full rounded-xl shadow-xl p-8 flex flex-col gap-6">
            <div className="flex flex-col gap-4 mx-5">
                <div>
                    {LabelDataSecurity?.map((item, index) => (
                        <div className="flex flex-col gap-4" key={index}>
                            <div className="flex flex-col gap-2 w-[14rem] md:text-xl md:w-full md:leading-[2rem]">
                                <h2 className="text-left font-medium text-sm md:text-base leading-8">
                                    {item.Name}
                                </h2>
                                <div className=" flex items-center flex-row gap-10">
                                    <h2 className="text-left items-center">
                                        {item.Value}
                                    </h2>
                                    <div>
                                        {item.Tombol ? item.Tombol : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SecurityPanel;
