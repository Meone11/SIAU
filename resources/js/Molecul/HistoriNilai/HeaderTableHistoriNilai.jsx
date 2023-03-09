import HeaderIsiKrs from "@/Atoms/KRS/HeaderIsiKrs";
import { useState } from "react";
import React from "react";

function HeaderTableHistoriNilai() {
    const [col, setCol] = useState(HeaderIsiKrs);
    return (
        <thead className="w-full md:w-full">
            {col.HeaderIsiKrs.map((cols) => (
                <tr className="bg-emerald-300 text-center text-sm md:text-xl">
                    <th scope="col" class="px-6 py-3">
                        {cols.No}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {cols.Kode}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {cols.MataKuliah}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {cols.SKS}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {cols.Nilai}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {cols.NilaiDecimal}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {cols.Semester}
                    </th>
                </tr>
            ))}
        </thead>
    );
}

export default HeaderTableHistoriNilai;
