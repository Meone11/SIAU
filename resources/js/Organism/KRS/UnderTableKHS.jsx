import React from "react";
import HeaderIsiKrs from "@/Atoms/KRS/HeaderIsiKrs";
import { useState } from "react";

function UnderTableKHS() {
    const [col, setCol] = useState(HeaderIsiKrs);
    return (
        <div className="bg-gray-200 rounded-lg shadow-lg p-5 overflow-x-scroll w-full h-fit md:overflow-x-visible">
            {col.HeaderIsiKrs.map((cols) => (
                <table className="table-fixed w-[40rem] md:w-full">
                    <thead className="w-fit md:w-full">
                        <tr className="bg-emerald-300">
                            <th scope="col" class="px-6 py-3"></th>
                            <th scope="col" class="px-6 py-3">
                                {cols.KreditBeban}
                            </th>
                            <th scope="col" class="px-6 py-3">
                                {cols.KreditDicapai}
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                {cols.BobotSKS}
                            </th>
                            <th scope="col" class="px-6 py-3">
                                {cols.Ip}
                            </th>
                        </tr>
                    </thead>
                    <tbody className="w-fit md:w-full text-center text-sm">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                {cols.SemesterIni}
                            </th>
                            <td class="px-6 py-3">{cols.KreditBeban}</td>
                            <td class="px-6 py-3">{cols.KreditDicapai}</td>
                            <td class="px-6 py-3">{cols.BobotSKS}</td>
                            <td class="px-6 py-3">{cols.Ip}</td>
                        </tr>
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                {cols.SemesterKumulatif}
                            </th>
                            <td class="px-6 py-3">{cols.KreditBeban}</td>
                            <td class="px-6 py-3">{cols.KreditDicapai}</td>
                            <td class="px-6 py-3">{cols.BobotSKS}</td>
                            <td class="px-6 py-3">{cols.Ip}</td>
                        </tr>
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                {cols.MaksSksYAD}
                            </th>
                            <td class="px-6 py-3">{cols.KreditBeban}</td>
                            <td class="px-6 py-3">{cols.KreditDicapai}</td>
                            <td class="px-6 py-3">{cols.BobotSKS}</td>
                            <td class="px-6 py-3">{cols.Ip}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    );
}

export default UnderTableKHS;
