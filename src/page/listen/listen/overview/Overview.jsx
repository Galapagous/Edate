import { getCallerData, getListeners, header } from "./data";
import Card from "../../../../component/card/Card";
import Table from "../../../../component/table/Table";

const Overview = () => {
  return (
    <div className="w-full h-full p-2 bg-gray-50">
      <section className="m-5 bg-white p-[1rem]">
        <h1 className="mb-3 font-thin text-lg">Overview</h1>
        <div className="flex items-start justify-evenly gap-2">
          {getCallerData.map((eachData, index) => {
            return (
              <div className="w-full" key={index}>
                <Card
                  title={eachData?.title}
                  icon={eachData?.icon}
                  color={eachData?.color}
                  value={eachData?.value}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* =========== Listeners ============ */}
      <section className="m-5 bg-white p-[1rem]">
        <h1 className="mb-3 font-thin text-lg">Call log</h1>
        <div>
          <div>
            <Table headers={header} data={getListeners()} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
