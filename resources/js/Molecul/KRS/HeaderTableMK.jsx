import HeaderIsiKrs from "@/Atoms/KRS/HeaderIsiKrs";
import { useState } from "react";
import React from "react";

function HeaderTableMK() {
    const [col, setCol] = useState(HeaderIsiKrs);
    return (
        <thead className="w-fit md:w-full">
            {col.HeaderIsiKrs.map((cols) => (
                <tr className="bg-emerald-300">
                    <th scope="col" class="px-6 py-3">
                        {cols.Kode}
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        {cols.MataKuliah}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {cols.SKS}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {cols.Kelas}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {cols.Pengajar}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {cols.Tanggal}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {cols.Ruang}
                    </th>
                </tr>
            ))}
        </thead>
    );
}

export default HeaderTableMK;
