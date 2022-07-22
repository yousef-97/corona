import React from "react";

type Props = { data: any };

const GlobalStatistics = (props: Props) => {
  const { data } = props;
  return (
    <div>
      <h2 className="text-2xl font-semibold">Global Corona Statistics: </h2>
      <div className="px-4 overflow-x-auto">
        <div className="container my-24 px-6 mx-auto">
          <section className="mb-32 text-gray-800 text-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 items-center ">
              <div className="relative">
                <h5 className="text-lg text-blue-600 font-bold mb-4">
                  {data?.Global?.NewConfirmed.toLocaleString()}
                </h5>
                <h6 className="font-medium text-gray-500">New Confirmed</h6>
                <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
              </div>

              <div className="relative">
                <h5 className="text-lg text-blue-600 font-bold mb-4">
                  {data?.Global?.TotalConfirmed.toLocaleString()}
                </h5>
                <h6 className="font-medium text-gray-500">Total Confirmed</h6>
                <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
              </div>

              <div className="relative">
                <h5 className="text-lg text-blue-600 font-bold mb-4">
                  {data?.Global?.NewRecovered.toLocaleString()}
                </h5>
                <h6 className="font-medium text-gray-500">New Recovered</h6>
                <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
              </div>

              <div className="relative">
                <h5 className="text-lg text-blue-600 font-bold mb-4">
                  {data?.Global?.TotalRecovered.toLocaleString()}
                </h5>
                <h6 className="font-medium text-gray-500 mb-0">
                  Total Recovered
                </h6>
              </div>

              <div className="relative">
                <h5 className="text-lg text-blue-600 font-bold mb-4">
                  {data?.Global?.NewDeaths.toLocaleString()}
                </h5>
                <h6 className="font-medium text-gray-500">New Deaths</h6>
                <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
              </div>

              <div className="relative">
                <h5 className="text-lg text-blue-600 font-bold mb-4">
                  {data?.Global?.TotalDeaths.toLocaleString()}
                </h5>
                <h6 className="font-medium text-gray-500 mb-0">Total Deaths</h6>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GlobalStatistics;
