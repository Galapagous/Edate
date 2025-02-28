import { getMainPage } from "./data"
import Navbar from "./Navbar"
import SideBar from "./SideBar"
import { useState } from "react"

const Listen = () => {
  const [selection, setSelection] = useState('Overview')
  const SelectedComponent = getMainPage[selection]
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      {/* navbar */}
      <Navbar/>
      {/* --- Main section --- */}
      <div className="flex items-start justify-start gap-2 p-2 w-full h-full">
        <div className="sm:w-[20%] w-[40%]">
          <SideBar selection={selection} setSelection={setSelection}/>
        </div>
        <div className="h-full sm:w-[80%] w-[60%] rounded-md">
          {
          <SelectedComponent/>
          }
        </div>
      </div>
    </div>
  )
}

export default Listen