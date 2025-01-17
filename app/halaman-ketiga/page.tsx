"use client";

import dataTablesJSON from "@/deskripsi_test/datatables.json";
import { useModal } from "@/store/modal";
import { useState } from "react";

export default function HalamanKetiga() {
  const { openWithDetails } = useModal();

  const limitPerPage = [5, 10, 15, 20];
  const [searchByName, setsearchByName] = useState<string>("");
  const [limit, setLimit] = useState<number>(limitPerPage[0]);

  return (
    <div className="flex flex-col gap-4 items-center">
      <input
        type="text"
        value={searchByName}
        onChange={(e) => setsearchByName(e.target.value)}
      />
      <table className="table-auto border-collapse border-spacing-2">
        <thead>
          <tr>
            <th className="p-4 border border-slate-300">Id</th>
            <th className="p-4 border border-slate-300">Name</th>
            <th className="p-4 border border-slate-300">Age</th>
            <th className="p-4 border border-slate-300">Occupation</th>
            <th className="p-4 border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {dataTablesJSON.map((data, index) => (
            <tr
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              key={data.id}
            >
              <td className="p-4 border border-slate-300">{data.id}</td>
              <td className="p-4 border border-slate-300">{data.name}</td>
              <td className="p-4 border border-slate-300">{data.age}</td>
              <td className="p-4 border border-slate-300">{data.occupation}</td>
              <td className="p-4 border border-slate-300">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    if (index % 2 === 0) {
                      openWithDetails({
                        description:
                          "Are you sure you want to approve this song?",
                        imageURL: "https://picsum.photos/200/300",
                      });
                    } else {
                      openWithDetails({
                        description:
                          "Are you sure you want to select this song?",
                      });
                    }
                  }}
                >
                  Show modal
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center">
        <button className="font-semibold">Prev</button>
        <button className="font-semibold">Prev</button>
        <button className="font-semibold">Next</button>
      </div>
      <select
        name="limit"
        id="limit"
        value={String(limit)}
        onChange={(e) => setLimit(Number(e.target.value))}
      >
        {limitPerPage.map((limit) => (
          <option key={limit} value={limit}>
            {limit}
          </option>
        ))}
      </select>
    </div>
  );
}
