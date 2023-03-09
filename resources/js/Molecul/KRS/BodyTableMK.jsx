import React from "react";
import { useState } from "react";
import BodyIsiKrs from "@/Atoms/KRS/BodyIsiKrs";

function BodyTableMK() {
    const [rows, setRows] = useState(BodyIsiKrs);
    return (
        <tbody className="w-fit md:w-full text-center text-xs md:text-lg">
            {rows.BodyIsiKrs.map((row) => (
                <tr>
                    <td class="px-6 py-3">{row.Kode}</td>
                    <td class="px-6 py-3">{row.MataKuliah}</td>
                    <td class="px-6 py-3">{row.SKS}</td>
                    <td class="px-6 py-3">{row.Kelas}</td>
                    <td class="px-6 py-3">{row.Pengajar}</td>
                    <td class="px-6 py-3">{row.Ruang}</td>
                    <td class="px-6 py-3">{row.Tanggal}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default BodyTableMK;
