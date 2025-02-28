
const StepTwo = ({handleChange}) => {
  return (
    <div className="flex flex-col items-start justify-start gap-2 w-full">
      <h1 className="font-semibold text-2xl">When are you born?</h1>
      <p>I was born on</p>
      <input onChange={handleChange} name="dateOfBirth" className="bg-main_100 w-full outline-none border-none text-black px-3 py-2 rounded-md" type="date" placeholder="DD-MM-YY"/>
    </div>
  )
}

export default StepTwo

// const StepTwo = () => {
//   return (
//     <div className="flex flex-col items-start justify-start gap-2 w-full">
//       <h1 className="font-semibold text-2xl">When are you born?</h1>
//       <p>I was born on</p>
//       <input 
//         className="bg-main_100 w-full outline-none border-none px-3 py-2 rounded-md
//         text-2xl font-semibold text-blue-600
//         [&::-webkit-calendar-picker-indicator]:bg-black 
//         [&::-webkit-calendar-picker-indicator]:rounded-lg 
//         [&::-webkit-calendar-picker-indicator]:p-1 
//         [&::-webkit-calendar-picker-indicator]:cursor-pointer
//         [color-scheme:dark]"
//         type="date" 
//         placeholder="DD-MM-YY"
//       />
//     </div>
//   )
// }

// export default StepTwo