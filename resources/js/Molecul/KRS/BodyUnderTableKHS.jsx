import React from "react";
import BodyIsiKrs from "@/Atoms/KRS/BodyIsiKrs";
import { useState } from "react";

function BodyUnderTableKHS() {
    const [rows, setRows] = useState(BodyIsiKrs);
    return (
        <tbody className="w-fit md:w-full text-center text-sm">
            {rows.BodyIsiKrs.map((row) => (
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Semester Ini
                    </th>
                    <td class="px-6 py-3">{row.KreditBeban}</td>
                    <td class="px-6 py-3">{row.KreditDicapai}</td>
                    <td class="px-6 py-3">{row.BobotSKS}</td>
                    <td class="px-6 py-3">{row.Ip}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default BodyUnderTableKHS;
