import BodyTable from "@/Molecul/SimKuliah/BodyTable";
import HeaderTable from "@/Molecul/SimKuliah/HeaderTable";
import React from "react";

function TableMataKuliah() {
    return (
        <div className="bg-gray-200 rounded-lg shadow-lg p-5 overflow-x-scroll w-full md:overflow-x-visible">
            <table className="table-fixed w-full">
                <HeaderTable />
                <BodyTable />
            </table>
        </div>
    );
}

export default TableMataKuliah;
