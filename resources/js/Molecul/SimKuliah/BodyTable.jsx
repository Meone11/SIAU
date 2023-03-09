import React from "react";
import { useState } from "react";
import DaftarSimKuliah from "@/Atoms/SimKuliah/DaftarSimKuliah";

function BodyTable() {
    const [rows, setRows] = useState(DaftarSimKuliah);
    return (
        <tbody className="w-fit md:w-full text-center text-xs md:text-lg">
            {rows.DaftarSimKuliah.map((row) => (
                <tr>
                    <td class="px-6 py-3">{row.Kode}</td>
                    <td class="px-6 py-3">{row.MataKuliah}</td>
                    <td class="px-6 py-3">{row.SKS}</td>
                    <td class="px-6 py-3">{row.Kelas}</td>
                    <td class="px-6 py-3">{row.Pengajar}</td>
                    <td class="px-6 py-3">{row.Ruang}</td>
                    <td class="px-6 py-3">{row.Absensi}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default BodyTable;
