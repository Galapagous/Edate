import Sidebar from './Thanks.sidebar'
import Navbar from '../Navbar'
import { useState } from 'react'
import { getThanksPage } from '../data'


const ThankLayout = () => {
  const [selection, setSelection] = useState('Overview')
  const SelectedComponent = getThanksPage[selection]
  return (
    <div className="w-full h-full">
      {/* navbar */}
      <Navbar/>
      {/* --- Main section --- */}
      <div className="flex items-start justify-start gap-2 p-2 w-full h-full">
        <div className="sm:w-[20%] w-[40%]">
          <Sidebar selection={selection} setSelection={setSelection}/>
        </div>
        <div className="h-full sm:w-[80%] w-[60%] rounded-md bg-white">
          {<SelectedComponent/>}
        </div>
      </div>
    </div>
  )
}

export default ThankLayout