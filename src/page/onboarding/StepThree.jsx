// import { useState } from "react"
// import { BiCheck } from "react-icons/bi"

// const StepThree = ({handleChange}) => {
//   const [gender, setGender] = useState(null)
//   const [relationshipStatus, setRelationshipStatus] = useState(null)
//   const handleGender = (gender)=>{
//     setGender(gender)
//   }

//   const handleRelatioshipStatus = (status)=>{
//     setRelationshipStatus(status)
//   }
//   return (
//     <div className="flex flex-col items-start justify-start gap-2 w-full">
//       <h1 className="font-semibold text-2xl">Let explore why you are here</h1>
//       <p className="text-neut_100">I am a:</p>
//       <div className="w-full flex flex-col items-center justify-center gap-2">
//         <div className="w-full">
//           <button className="w-full bg-main_200 text-white rounded-md px-4 py-2 flex items-center justify-center relative" onClick={()=>{handleGender('male')}}>Man 
//            {gender === 'male' ? <BiCheck className="text-green-500 bg-white rounded-full absolute right-1"/> : null}
//           </button>
//         </div>
//         <div className="w-full">
//           <button className="w-full bg-main_200 text-white rounded-md px-4 py-2 flex items-center justify-center relative" onClick={()=>{handleGender('woman')}}>Woman
//            {gender === 'woman' ? <BiCheck className="text-green-500 bg-white rounded-full absolute right-1"/> : null}
//           </button>
//         </div>
//        {/* <input className="bg-main_100 w-full outline-none border-none text-black px-3 py-2 rounded-md" type="checkbox"/> */}
//       </div>
//       <p className="text-neut_100">and i am currently:</p>
//       <div className="w-full flex flex-col items-center justify-center gap-2">
//         <div className="w-full">
//           <button className="w-full bg-main_200 text-white rounded-md px-4 py-2 flex items-center justify-center relative" onClick={()=>{handleRelatioshipStatus('single')}}>Single 
//            {relationshipStatus === 'single' ? <BiCheck className="text-green-500 bg-white rounded-full absolute right-1"/> : null}
//           </button>
//         </div>
//         <div className="w-full">
//           <button className="w-full bg-main_200 text-white rounded-md px-4 py-2 flex items-center justify-center relative" onClick={()=>{handleRelatioshipStatus('married')}}>Married
//            {relationshipStatus === 'married' ? <BiCheck className="text-green-500 bg-white rounded-full absolute right-1"/> : null}
//           </button>
//         </div>
//         <div className="w-full">
//           <button className="w-full bg-main_200 text-white rounded-md px-4 py-2 flex items-center justify-center relative" onClick={()=>{handleRelatioshipStatus('widowed')}}>Widowed
//            {relationshipStatus === 'widowed' ? <BiCheck className="text-green-500 bg-white rounded-full absolute right-1"/> : null}
//           </button>
//         </div>
//         <div className="w-full">
//           <button className="w-full bg-main_200 text-white rounded-md px-4 py-2 flex items-center justify-center relative" onClick={()=>{handleRelatioshipStatus('separated')}}>Separated
//            {relationshipStatus === 'separated' ? <BiCheck className="text-green-500 bg-white rounded-full absolute right-1"/> : null}
//           </button>
//         </div>
//         <div className="w-full">
//           <button className="w-full bg-main_200 text-white rounded-md px-4 py-2 flex items-center justify-center relative" onClick={()=>{handleRelatioshipStatus('others')}}>Others
//            {relationshipStatus === 'others' ? <BiCheck className="text-green-500 bg-white rounded-full absolute right-1"/> : null}
//           </button>
//         </div>
//        {/* <input className="bg-main_100 w-full outline-none border-none text-black px-3 py-2 rounded-md" type="checkbox"/> */}
//       </div>

//     </div>
//   )
// }

// export default StepThree

// ----- version 2 --------
import { useState } from "react";
import { BiCheck } from "react-icons/bi";

const StepThree = ({ handleChange }) => {
  const [gender, setGender] = useState(null);
  const [relationshipStatus, setRelationshipStatus] = useState(null);

  const handleGenderChange = (e) => {
    const value = e.target.value;
    setGender(value);
    handleChange(e); // Pass event to parent
  };

  const handleRelationshipStatusChange = (e) => {
    const value = e.target.value;
    setRelationshipStatus(value);
    handleChange(e); // Pass event to parent
  };

  return (
    <div className="flex flex-col items-start justify-start gap-4 w-full">
      <h1 className="font-medium text-xl">Let’s explore why you’re here</h1>

      {/* Gender Section */}
      <fieldset className="w-full">
        <legend className="text-sm text-gray-600 mb-2">I am a:</legend>
        <div className="flex flex-col gap-3">
          {["male", "woman"].map((option) => (
            <label
              key={option}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="gender"
                value={option}
                checked={gender === option}
                onChange={handleGenderChange}
                className="hidden"
              />
              <span
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  gender === option
                    ? "border-indigo-500 bg-indigo-500"
                    : "border-gray-300 group-hover:border-indigo-400"
                } transition-colors duration-200`}
              >
                {gender === option && (
                  <BiCheck className="w-4 h-4 text-white" />
                )}
              </span>
              <span className="text-sm capitalize">{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Relationship Status Section */}
      <fieldset className="w-full">
        <legend className="text-sm text-gray-600 mb-2">And I am currently:</legend>
        <div className="flex flex-col gap-3">
          {["single", "married", "widowed", "separated", "others"].map((option) => (
            <label
              key={option}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="maritalStatus"
                value={option}
                checked={relationshipStatus === option}
                onChange={handleRelationshipStatusChange}
                className="hidden"
              />
              <span
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  relationshipStatus === option
                    ? "border-indigo-500 bg-indigo-500"
                    : "border-gray-300 group-hover:border-indigo-400"
                } transition-colors duration-200`}
              >
                {relationshipStatus === option && (
                  <BiCheck className="w-4 h-4 text-white" />
                )}
              </span>
              <span className="text-sm capitalize">{option}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default StepThree;