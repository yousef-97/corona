import React from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import { Table } from "@tanstack/react-table";

type Props = {
  table: Table<any>;
};

const Pagination = (props: Props) => {
  const { table } = props;
  return (
    <>
      <div>
        Results:{" "}
        <span className="font-semibold">
          ({table.getPrePaginationRowModel().rows.length})
        </span>{" "}
        Country
      </div>

      <div className="flex items-center gap-2 mt-2">
        <button
          className="px-2 py-1 text-gray-500 bg-gray-300 rounded-md hover:bg-indigo-400 hover:text-white disabled:cursor-not-allowed disabled:hover:bg-gray-100 disabled:bg-gray-100"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronDoubleLeftIcon className="w-3 h-3 text-black" />
        </button>
        <button
          className="px-2 py-1 text-gray-500 bg-gray-300 rounded-md hover:bg-indigo-400 hover:text-white disabled:cursor-not-allowed disabled:hover:bg-gray-100 disabled:bg-gray-100"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeftIcon className="w-3 h-3 text-black" />
        </button>
        <button
          className="px-2 py-1 text-gray-500 bg-gray-300 rounded-md hover:bg-indigo-400 hover:text-white disabled:cursor-not-allowed disabled:hover:bg-gray-100 disabled:bg-gray-100"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRightIcon className="w-3 h-3 text-black" />
        </button>
        <button
          className="px-2 py-1 text-gray-500 bg-gray-300 rounded-md hover:bg-indigo-400 hover:text-white disabled:cursor-not-allowed disabled:hover:bg-gray-100 disabled:bg-gray-100"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <ChevronDoubleRightIcon className="w-3 h-3 text-black" />
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Pagination;
