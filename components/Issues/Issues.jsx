import Head from "next/head";
import Grid from 'Fragments/Grid/Grid';
import React from "react";
const Issues = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Columns1",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Visits",
            accessor: "visits",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Profile Progress",
            accessor: "progress",
          },
        ],
      },
    ],
    []
  );

  const gridData = [
    {
      firstName: "Ahmet",
      lastName: "Mehmet",
      age: 30,
      visits: 540,
      progress: 1,
      status: "test",
    },
    {
      firstName: "Zeyna",
      lastName: "Dal",
      age: 21,
      visits: 31,
      progress: 1,
      status: "test",
    },
  ];
  return (
    <>
      <Head>
        <title>Issues</title>
      </Head>
      <main>
        <div className="bg-white">
          <div className="px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 py-12 lg:w-full  lg:px-8 lg:mx-auto">
            <div className="mt-1 relative rounded-md inset-y-0 right-0  flex items-center">
              <h2 className="text-4xl">Issues</h2>
              <div className="mt-1 relative rounded-md inset-y-0 right-0  flex items-center lg:mx-auto">
                <button
                  type="button"
                  className="sm:left-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Create Project
                </button>
              </div>
            </div>
          </div>
          <div className="px-4 h-16  mx-auto">
            <Grid columns={columns} rows={gridData} />
          </div>
        </div>
      </main>
    </>
  );
};
export default Issues;
