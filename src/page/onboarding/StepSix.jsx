// import { useRef, useState } from "react"
// import { BiUser } from "react-icons/bi"

// const StepSix = () => {
//   const [firstImage, setFirstImage] = useState(null)
//   const [secondImage, setSecondImage] = useState(null)
//   const [thirdImage, setThirdImage] = useState(null)
//   const [fourthImage, setFourthImage] = useState(null)

//   const firstImageRef = useRef(null)
//   const secondImageRef = useRef(null)
//   const thirdImageRef = useRef(null)
//   const fourthImageRef = useRef(null)

//   const handleImage = (e,image)=>{
//     const file  = e?.target?.files[0]
//     switch (image) {
//       case 'firstImage':
//         setFirstImage(URL.createObjectURL(file))
//         break;
//       case 'secondImage':
//         setSecondImage(URL.createObjectURL(file))
//         break;
//       case 'thirdImage':
//         setThirdImage(URL.createObjectURL(file))
//         break;
//       case 'fourthImage':
//         setFourthImage(URL.createObjectURL(file))
//         break;
    
//       default:
//         break;
//     }
//   }

//   return (
//     <div className="flex flex-col items-start justify-start gap-2 w-full">
//       <h1 className="font-semibold text-2xl">Let Get Your Image</h1>
//       <div className="w-full flex items-center justify-center flex-wrap">
//         <div>
//           {
//             firstImage ? 
//             <img src={firstImage} alt="image" />
//             :
//             <BiUser onClick={()=>firstImageRef?.current?.click()} className="border-2 p-5 w-20 h-20 "/>
//           }
//           <input onChange={(e)=>{handleImage(e,'firstImage')}} className="hidden" ref={firstImageRef} type="file" name="first_image" id="" />
//         </div>
//         <div>
//           {
//             secondImage ? 
//             <img src={secondImage} alt="image" />
//             :
//             <BiUser onClick={()=>secondImageRef?.current?.click()} className="border-2 p-5 w-20 h-20 "/>
//           }
//           <input onChange={(e)=>{handleImage(e,'secondImage')}} className="hidden" ref={secondImageRef} type="file" name="second_image" id="" />
//         </div>
//         <div>
//           {
//             thirdImage ? 
//             <img src={thirdImage} alt="image" />
//             :
//             <BiUser onClick={()=>thirdImageRef?.current?.click()} className="border-2 p-5 w-20 h-20 "/>
//           }
//           <input onChange={(e)=>{handleImage(e,'thirdImage')}} className="hidden" ref={thirdImageRef} type="file" name="third_image" id="" />
//         </div>
//         <div>
//           {
//             fourthImage ?
//             <img src={thirdImage} alt="image" />
//             :
//             <BiUser onClick={()=>fourthImageRef?.current?.click()} className="border-2 p-5 w-20 h-20 "/>
//           }
//           <input onChange={(e)=>{handleImage(e,'fourthImage')}} className="hidden" ref={fourthImageRef} type="file" name="fourth_image" id="" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default StepSix


// ------------ version 2 ------------
// import { useRef, useState } from "react";
// import { BiUser } from "react-icons/bi";

// const StepSix = () => {
//   const [firstImage, setFirstImage] = useState(null);

//   const firstImageRef = useRef(null);
//   (e, image) => {
//     const file = e?.target?.files[0]; // Use files[0] to get the selected file
//     if (!file) return;
//         setFirstImage(URL.createObjectURL(file));

//   };

//   return (
//     <div className="flex flex-col items-start justify-start gap-2 w-full">
//       <h1 className="font-semibold text-2xl mb-4">Let Get Your Image</h1>
//       <div className="w-full flex items-center justify-center flex-wrap gap-10">
//         <div>
//           {firstImage ? (
//             <img className="w-20 h-20 object-cover" src={firstImage} alt="image" />
//           ) : (
//             <BiUser
//               onClick={() => firstImageRef?.current?.click()}
//               className="border-2 p-5 w-20 h-20 cursor-pointer hover:text-main_200"
//             />
//           )}
//           <input
//             onChange={(e) => handleImage(e, "firstImage")}
//             className="hidden"
//             ref={firstImageRef}
//             type="file"
//             name="first_image"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepSix;

// --- version 3 -----
import { useRef, useState } from "react";
import { MdUpload } from "react-icons/md"; // Material Design upload icon

const StepSix = ({ handleChange }) => {
  const [firstImage, setFirstImage] = useState(null);
  const firstImageRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFirstImage(URL.createObjectURL(file)); 
      handleChange(e); 
    }
  };

  const triggerFileInput = () => {
    firstImageRef.current?.click();
  };

  return (
    <div className="flex flex-col items-start justify-start gap-4 w-full">
      <h1 className="font-medium text-xl">Let’s get your image</h1>
      <div className="w-full flex items-center justify-center flex-wrap gap-6">
        <div className="flex flex-col items-center gap-2">
          {firstImage ? (
            <img
              className="w-20 h-20 object-cover rounded-full border border-gray-300 shadow-sm"
              src={firstImage}
              alt="Profile preview"
            />
          ) : (
            <div className="w-20 h-20 bg-gray-100 rounded-full border border-gray-300 shadow-sm flex items-center justify-center">
              <span className="text-gray-500 text-sm">No image</span>
            </div>
          )}
          <button
            onClick={triggerFileInput}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <MdUpload className="w-5 h-5" />
            Upload Image
          </button>
          <input
            onChange={handleFileChange}
            className="hidden"
            ref={firstImageRef}
            type="file"
            name="ProfilePicture" // Matches parent’s expected field
            accept="image/*" // Restrict to images
          />
        </div>
      </div>
    </div>
  );
};

export default StepSix;