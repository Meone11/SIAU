import HeaderMKKrs from "@/Atoms/DashboardKrs/HeaderMKKrs";
import React, { useState } from "react";

function MataKuliahKrs() {
    const [col, setcol] = useState(HeaderMKKrs);
    return (
        <thead className="w-fit md:w-full text-sm">
            {col.HeaderMKKrs.map((cols) => (
                <tr className="bg-emerald-300">
                    <th scope="col" class="px-6 py-3">
                        {cols.Kode}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {cols.MataKuliah}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {cols.Tanggal}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {cols.Kelas}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {cols.Ruang}
                    </th>
                </tr>
            ))}
        </thead>
    );
}

export default MataKuliahKrs;
