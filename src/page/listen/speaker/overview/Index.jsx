import { getCallerData, getListeners, header } from './data'
import Card from '../../../../component/card/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { USER_URL } from '../../../../constant/resources' 
import Table from '../../../../component/table/Table'

const Overview = () => {
  const [userData, setUserData] = useState([1,2,3,4,5,6])

  return (
    <div className='bg-backgound_primary w-full h-full p-2'>
        <section className='m-5 bg-white p-[1rem]'>
          <h1 className='mb-3 font-thin text-lg'>Overview</h1>
          <div className='flex items-start justify-evenly gap-2'>
            {
              getCallerData.map((eachData, index)=>{
                return(
                  <div className='w-full' key={index}>
                    <Card title={eachData?.title} icon={eachData?.icon} color={eachData?.color} value={eachData?.value}/>
                  </div>
                )
              })
            }
          </div>
        </section>

        {/* =========== Speaker ============ */}
        <section className='m-5 bg-white p-[1rem]'>
            <h1 className='mb-3 font-thin text-lg'>Call log</h1>
            <div>
              <div>
                <Table headers={header} data={getListeners()}/>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Overview