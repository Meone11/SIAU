import BodyIsiKrs from "@/Atoms/KRS/BodyIsiKrs";
import { useState } from "react";
import React from "react";

function BodyTableKHS() {
    const [rows, setRows] = useState(BodyIsiKrs);
    return (
        <tbody className="w-fit md:w-full text-center text-sm">
            {rows.BodyIsiKrs.map((row) => (
                <tr>
                    <td class="px-6 py-3">{row.No}</td>
                    <td class="px-6 py-3">{row.Kode}</td>
                    <td class="px-6 py-3">{row.MataKuliah}</td>
                    <td class="px-6 py-3">{row.SKS}</td>
                    <td class="px-6 py-3">{row.NilaiHuruf}</td>
                    <td class="px-6 py-3">{row.BobotSKS}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default BodyTableKHS;
