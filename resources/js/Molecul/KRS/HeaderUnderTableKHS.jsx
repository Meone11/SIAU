import React from "react";
import HeaderIsiKrs from "@/Atoms/KRS/HeaderIsiKrs";
import { useState } from "react";

function HeaderUnderTableKHS() {
    const [col, setCol] = useState(HeaderIsiKrs);
    return (
        <thead className="w-fit md:w-full">
            {col.HeaderIsiKrs.map((cols) => (
                <tr className="bg-emerald-300">
                    <th scope="col" class="px-6 py-3">
                        {cols.KreditBeban}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {cols.KreditDicapai}
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        {cols.BobotSKS}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {cols.Ip}
                    </th>
                </tr>
            ))}
        </thead>
    );
}

export default HeaderUnderTableKHS;
