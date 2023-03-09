import React from "react";
import IsiTableKrs from "@/Atoms/DashboardKrs/IsiTableKrs";
import { useState } from "react";

function BodyTableKrs() {
    const [row, setRows] = useState(IsiTableKrs);
    return (
        <tbody className="w-fit md:w-full text-center">
            {row.IsiTableKrs.map((row) => (
                <tr>
                    <td class="px-6 py-3">{row.Kode}</td>
                    <td class="px-6 py-3">{row.MataKuliah}</td>
                    <td class="px-6 py-3">{row.Tanggal}</td>
                    <td class="px-6 py-3">{row.Kelas}</td>
                    <td class="px-6 py-3">{row.Ruang}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default BodyTableKrs;
