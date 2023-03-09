import BodyIsiKrs from "@/Atoms/KRS/BodyIsiKrs";
import { useState } from "react";
import React from "react";

function BodyTableIsiKrs() {
    const [rows, setRows] = useState(BodyIsiKrs);
    return (
        <tbody className="w-fit md:w-full text-center text-sm">
            {rows.BodyIsiKrs.map((row) => (
                <tr>
                    <td class="px-6 py-3">{row.Ambil}</td>
                    <td class="px-6 py-3">{row.Kode}</td>
                    <td class="px-6 py-3">{row.MataKuliah}</td>
                    <td class="px-6 py-3">{row.SKS}</td>
                    <td class="px-6 py-3">{row.Kelas}</td>
                    <td class="px-6 py-3">{row.Pengajar}</td>
                    <td class="px-6 py-3">{row.Ruang}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default BodyTableIsiKrs;
