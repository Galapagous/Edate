
const Intro = ({setEventType, setShowIntro}) => {

    const handleSelection = ({selectedEvent, })=>{
        setEventType(selectedEvent)
        setShowIntro(false)
    }

  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='mb-3 font-semibold text-2xl'>Welcome to our platform</h1>
        <p className='text-base my-1 text-center'>
            Welcome to Thanks for Coming! Whether you&apos;re hosting an unforgettable event or looking to join one, we&apos;ve got you covered. Invite friends to join the fun or request to attend exciting gatherings—connect, celebrate, and make every moment count. Let&apos;s get started!
        </p>
        <div className='mt-3 flex items-center justify-center gap-5'>
            <button onClick={()=>{handleSelection('host')}} className='p-2 px-4 rounded-sm bg-main_200 text-white'>Host a gathering</button>
            <button onClick={()=>{handleSelection('join')}} className='p-2 px-4 rounded-sm bg-main_200 text-white'>Join a gathering</button>
        </div>
    </div>
  )
}

export default Intro