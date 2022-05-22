import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
const Dashboard = () => {
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
        </div>
      </main>
    </>
  );
};
export default Dashboard;
