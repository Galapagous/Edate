// import { getCallerData, getListeners, header } from './data'
// import Card from '../../../../component/card/Card'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { USER_URL } from '../../../../constant/resources'
// import Table from '../../../../component/table/Table'

// const Overview = () => {
//   const [userData, setUserData] = useState([1,2,3,4,5,6])

//   return (
//     <div className='bg-backgound_primary w-full h-full p-2'>
//         <section className='m-5 bg-white p-[1rem]'>
//           <h1 className='mb-3 font-thin text-lg'>Overview</h1>
//           <div className='flex items-start justify-evenly gap-2'>
//             {
//               getCallerData.map((eachData, index)=>{
//                 return(
//                   <div className='w-full' key={index}>
//                     <Card title={eachData?.title} icon={eachData?.icon} color={eachData?.color} value={eachData?.value}/>
//                   </div>
//                 )
//               })
//             }
//           </div>
//         </section>

//         {/* =========== Speaker ============ */}
//         <section className='m-5 bg-white p-[1rem]'>
//             <h1 className='mb-3 font-thin text-lg'>Call log</h1>
//             <div>
//               <div>
//                 <Table headers={header} data={getListeners()}/>
//               </div>
//             </div>
//         </section>
//     </div>
//   )
// }

// export default Overview

// ------ version 2 ---------
import { getCallerData, getListeners, header } from "./data";
import Card from "../../../../component/card/Card";
import { useState } from "react";
import Table from "../../../../component/table/Table";
import { FaChartBar, FaChevronRight } from "react-icons/fa";

const Overview = () => {
  const [userData, setUserData] = useState([1, 2, 3, 4, 5, 6]);
  const [timeFilter, setTimeFilter] = useState("Weekly");

  return (
    <div className="w-full h-full">
      {/* Stats Overview Cards */}
      <section className="mb-6 bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <FaChartBar className="text-red-500" />
            <h2 className="font-semibold text-lg text-gray-800">
              Performance Overview
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <select
              className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 bg-gray-50 text-gray-700 focus:outline-none focus:ring-1 focus:ring-red-400"
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
            >
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {getCallerData.map((eachData, index) => (
              <div className="w-full" key={index}>
                <Card
                  title={eachData?.title}
                  icon={eachData?.icon}
                  color={eachData?.color}
                  value={eachData?.value}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call Log Table */}
      <section className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <FaChevronRight className="text-red-500" />
            <h2 className="font-semibold text-lg text-gray-800">Call Log</h2>
          </div>
          <div>
            <button className="px-3 py-1.5 text-sm font-medium text-red-500 hover:text-red-600 hover:underline transition-colors flex items-center gap-1">
              View All
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>

        <Table headers={header} data={getListeners()} />
      </section>
    </div>
  );
};

export default Overview;
