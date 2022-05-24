import { useTable, useSortBy, useExpanded } from "react-table";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

const Table = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useExpanded
  );
  
  // Render the UI for your table
  return (
    <table
      {...getTableProps()}
      className="items-center w-full bg-transparent border-collapse"
    >
      <thead>
        <tr key="Columns1">
          {allColumns.map((column) => (
            <th
              key={column.render("Header")}
              {...column.getHeaderProps(column.getSortByToggleProps())}
              className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
            >
              {column.render("Header")}
              {/* Add a sort direction indicator */}
              {column.isSorted ? (
                column.isSortedDesc ? (
                  <FontAwesomeIcon icon={faSortUp}></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon>
                )
              ) : (
                ""
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr key={row.id} {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td key={cell.render("Cell")} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const GridTable = ({ columns, rows }) => {
  const data = React.useMemo(() => rows, []);

  return <Table columns={columns} data={data} />;
};

export default GridTable;
