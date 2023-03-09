import BodyTableHistoriNilai from "@/Molecul/HistoriNilai/BodyTableHistoriNilai";
import HeaderTableHistoriNilai from "@/Molecul/HistoriNilai/HeaderTableHistoriNilai";
import React from "react";

function TableHistoriNilai() {
    return (
        <div className="bg-gray-200 rounded-lg shadow-lg p-5 overflow-x-scroll w-full h-full md:overflow-x-visible">
            <table className="table-fixed w-[40rem] md:w-full">
                <HeaderTableHistoriNilai />
                <BodyTableHistoriNilai />
            </table>
        </div>
    );
}

export default TableHistoriNilai;
