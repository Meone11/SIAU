import BodyTableMK from "@/Molecul/KRS/BodyTableMK";
import HeaderTableMK from "@/Molecul/KRS/HeaderTableMK";
import React from "react";

function TableMK() {
    return (
        <div className="bg-gray-200 rounded-lg shadow-lg p-5 overflow-x-scroll w-full md:overflow-x-visible">
            <table className="table-fixed w-[40rem] md:w-full">
                <HeaderTableMK />
                <BodyTableMK />
            </table>
        </div>
    );
}

export default TableMK;
