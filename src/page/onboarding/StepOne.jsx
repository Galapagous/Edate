
// const StepOne = ({handleChange}) => {
//   return (
//     <div className="flex flex-col items-start justify-start gap-2 w-full">
//       <h1 className="font-semibold text-2xl">Let Get to know you</h1>
//       <p className="text-neut_100">My first name is:</p>
//       <input onChange={handleChange} name='firstName' className="bg-main_200 w-full outline-none border-none text-black px-3 py-2 rounded-md" type="text" placeholder=""/>
//       <p className="text-neut_100">Last name is:</p>
//       <input onChange={handleChange} name='lastName' className="bg-main_200 w-full outline-none border-none text-black px-3 py-2 rounded-md" type="text" placeholder=""/>
//     </div>
//   )
// }

// export default StepOne

// ----- version 2 ------
const StepOne = ({ handleChange }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-4 w-full">
      <h1 className="font-medium text-xl">Let’s get to know you</h1>

      {/* First Name */}
      <div className="w-full">
        <label className="text-sm text-gray-600 mb-1 block">My first name is:</label>
        <input
          onChange={handleChange}
          name="firstName"
          className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
          type="text"
          placeholder="Enter your first name"
        />
      </div>

      {/* Last Name */}
      <div className="w-full">
        <label className="text-sm text-gray-600 mb-1 block">My last name is:</label>
        <input
          onChange={handleChange}
          name="lastName"
          className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
          type="text"
          placeholder="Enter your last name"
        />
      </div>
    </div>
  );
};

export default StepOne;