import BodyIsiKrs from "@/Atoms/KRS/BodyIsiKrs";
import { useState } from "react";
import React from "react";

function BodyTableHistoriNilai() {
    const [rows, setRows] = useState(BodyIsiKrs);
    return (
        <tbody className="w-fit md:w-full text-center text-sm md:text-xl">
            {rows.BodyIsiKrs.map((row) => (
                <tr>
                    <td class="px-6 py-3">{row.No}</td>
                    <td class="px-6 py-3">{row.Kode}</td>
                    <td class="px-6 py-3">{row.MataKuliah}</td>
                    <td class="px-6 py-3">{row.SKS}</td>
                    <td class="px-6 py-3">{row.Nilai}</td>
                    <td class="px-6 py-3">{row.NilaiDesimal}</td>
                    <td class="px-6 py-3">{row.Semester}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default BodyTableHistoriNilai;
