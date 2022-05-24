import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Grid from "Fragments/Grid/Grid";
import React from "react";
import Modal from "Fragments/React-Modal/React-Modal";
import { ChangeTopMenuIssueModal } from "stores/Reducers/Dashboard/Dashboard";
import { useDispatch, connect } from "react-redux";
const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];
const DataModal = () => {
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};
const mapStateToProps = (state) => ({ ...state.Dashboard });
const Dashboard = (props) => {
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
  const dispatch = useDispatch();
  const CreateNewProjects = (e) => {
    dispatch(ChangeTopMenuIssueModal(true));
    
  };
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main>
        <div className="bg-white">
          <div className="px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 py-12 lg:w-full  lg:px-8 lg:mx-auto">
            <div className="mt-1 relative rounded-md inset-y-0 right-0  flex items-center">
              <h2 className="text-4xl">Dashboard</h2>
            </div>
          </div>
          <div className="px-4 h-16  mx-auto">
            <div className="mt-1 relative rounded-md inset-y-0 right-0  flex items-center lg:mx-auto">
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={CreateNewProjects}
              >
                Create New Project
              </button>
            </div>
            <Grid columns={columns} rows={gridData} />
            <Modal
              isModalOpen={props.TopMenuIssueModal}
              childrenHTML={DataModal()}
              shouldCloseOnEsc={true}
            />
          </div>
        </div>
      </main>
    </>
  );
};
export default connect(mapStateToProps)(Dashboard);
