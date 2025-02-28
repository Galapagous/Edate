import { getSidebarMenu } from "./data"


const SideBar = ({selection, setSelection}) => {
    const sideData = getSidebarMenu('1234')
    const handleNavigate = (link, name)=>{
        setSelection(name)
    }

  return (
    <div className="w-full flex flex-col items-start justify-start gap-4">
        <div className="mb-10">
            <h1>Menu bar</h1>
        </div>
        {
            sideData?.map((eachData)=>{
                return(
                    <button onClick={()=>{handleNavigate(eachData?.link, eachData?.name)}} className={`flex items-center ${selection === eachData?.name ? 'bg-main_200 text-white' : ''} justify-start p-2 gap-2 w-full hover:bg-gray-100`} to={eachData?.link} key={eachData?.name}>
                        <eachData.icon className="text-sm" />
                        {eachData?.name}
                    </button>
                )
            })
        }
    </div>
  )
}

export default SideBar