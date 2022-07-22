import React, { useEffect, useMemo, useState } from "react";

import {
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";

import {
  SortAscendingIcon,
  SortDescendingIcon,
} from "@heroicons/react/outline";

import axios from "axios";
import Filter from "./Components/Filter";
import Pagination from "./Components/Pagination";
import GlobalStatistics from "./Components/GlobalStatistics";

function App() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [data, setData] = useState<any>({ Countries: [] });

  useEffect(() => {
    axios?.get("https://api.covid19api.com/summary").then((res: any) => {
      setData(res?.data);
    });
  }, []);

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        header: "Country",
        footer: (props) => props.column.id,
        accessorKey: "Country",
      },
      {
        header: "New Confirmed",
        footer: (props) => props.column.id,
        accessorKey: "NewConfirmed",
        enableColumnFilter: false,
        enableSorting: false,
      },
      {
        header: "Total Confirmed",
        footer: (props) => props.column.id,
        accessorKey: "TotalConfirmed",
        enableColumnFilter: false,
        enableSorting: false,
      },
      {
        header: "New Recovered",
        footer: (props) => props.column.id,
        accessorKey: "NewRecovered",
        enableColumnFilter: false,
        enableSorting: false,
      },
      {
        header: "Total Recovered",
        footer: (props) => props.column.id,
        accessorKey: "TotalRecovered",
        enableColumnFilter: false,
        enableSorting: false,
      },
      {
        header: "New Deaths",
        footer: (props) => props.column.id,
        accessorKey: "NewDeaths",
        enableColumnFilter: false,
        enableSorting: false,
      },
      {
        header: "Total Deaths",
        footer: (props) => props.column.id,
        accessorKey: "TotalDeaths",
        enableColumnFilter: false,
        enableSorting: false,
      },
    ],
    []
  );

  const table = useReactTable({
    data: data?.Countries,
    columns,
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="m-8">
      <GlobalStatistics data={data} />
      <div>
        <h2 className="text-2xl font-semibold">
          Countries Corona Statistics:{" "}
        </h2>

        <div className="px-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden" />
          <table className="min-w-full leading-normal">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        colSpan={header.colSpan}
                      >
                        {header.isPlaceholder ? null : (
                          <>
                            <div
                              {...{
                                className: header.column.getCanSort()
                                  ? "cursor-pointer select-none"
                                  : "",
                                onClick:
                                  header.column.getToggleSortingHandler(),
                              }}
                            >
                              <div className="flex gap-3 items-center">
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                                {header.column.getCanSort() ? (
                                  <div>
                                    <SortAscendingIcon
                                      className={`w-4 h-4 ${
                                        header.column.getIsSorted() === "asc"
                                          ? "text-indigo-700"
                                          : "text-gray-500"
                                      }`}
                                    />
                                    <SortDescendingIcon
                                      className={`w-4 h-4 ${
                                        header.column.getIsSorted() === "desc"
                                          ? "text-indigo-700"
                                          : "text-gray-500"
                                      }`}
                                    />
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            {header.column.getCanFilter() ? (
                              <div>
                                <Filter column={header.column} table={table} />
                              </div>
                            ) : null}
                          </>
                        )}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Pagination table={table} />
      </div>
    </div>
  );
}

export default App;
