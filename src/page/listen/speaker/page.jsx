import { useState } from "react"
import Navbar from "../listen/Navbar"
import SideBar from "../listen/SideBar"
import { getSpeakerPage } from "./data"

const Speak = () => {

  const [selection, setSelection] = useState('Overview')
  const SelectedComponent = getSpeakerPage[selection]

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

export default Speak