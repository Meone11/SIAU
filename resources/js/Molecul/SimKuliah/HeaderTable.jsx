import React from "react";
import { useState } from "react";
import HeaderSimKuliah from "@/Atoms/SimKuliah/HeaderSimKuliah";

function HeaderTable() {
    const [col, setCol] = useState(HeaderSimKuliah);
    return (
        <thead className="w-fit md:w-full">
            {col.HeaderSimKuliah.map((cols) => (
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
                        {cols.Ruang}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {cols.Absensi}
                    </th>
                </tr>
            ))}
        </thead>
    );
}

export default HeaderTable;
