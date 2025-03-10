// import { BsEye, BsMailbox } from "react-icons/bs"
// import countryCodes from "../resources/registration"
// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup" 
// import { registerSchema } from "../validation/authentication"
// import Modal from "../component/modals"
// import { FiMail } from "react-icons/fi"


// const Register = () => {


//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(registerSchema),
//   });

//   const [passwordVisible, setPassowrdVisible] = useState(false)
//   const [confirmPasswordVisible, setConfirmPassowrdVisible] = useState(false)
//   const [showModal, setShowModal] = useState(false)
//   const [loading, setLoading] = useState(false)

//   const handlePasswordVisible = ()=>{
//     setPassowrdVisible(!passwordVisible)
//   }

//   const handleConfirmPasswordVisible = ()=>{
//     setConfirmPassowrdVisible(!confirmPasswordVisible)
//   }

//   const onSubmit = (data)=>{
//     setLoading(true)
//     setTimeout(()=>{
//       setLoading(false)
//       setShowModal(true)
//     }, 5000)
//     console.log(data)
//   }

//   return (
//     <div className='w-full flex items-center justify-center h-screen overflow-hidden'>
//         <div className="w-[50%] bg-backgound_primary flex items-center justify-center h-full relative">
//           <div className="mb-40">
//             <svg width="368" height="188" viewBox="0 0 368 188" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M368 187.5C368 137.772 348.246 90.0806 313.083 54.9175C277.919 19.7544 230.228 3.75437e-06 180.5 0C130.772 -3.75437e-06 83.0806 19.7544 47.9175 54.9175C12.7544 90.0805 -6.99999 137.772 -7 187.5L180.5 187.5H368Z" fill="url(#paint0_linear_40_331)"/>
//               <defs>
//               <linearGradient id="paint0_linear_40_331" x1="180" y1="-195.5" x2="180" y2="188" gradientUnits="userSpaceOnUse">
//               <stop stop-color="white"/>
//               <stop offset="1" stop-color="white" stop-opacity="0"/>
//               </linearGradient>
//               </defs>
//             </svg>
//           </div>
//           <div className="absolute top-0 left-0 mt-20 w-full h-full flex flex-col items-center justify-center">
//           <div className="flex items-center justify-center gap-5">
//             <div className="border-[2px] rounded-md border-main_200 px-2 py-[2px]">
//             <svg width="39" height="33" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M11.0625 0.5C5.36707 0.5 0.75 5.11709 0.75 10.8125C0.75 21.125 12.9375 30.5 19.5 32.6808C26.0625 30.5 38.25 21.125 38.25 10.8125C38.25 5.11709 33.6329 0.5 27.9375 0.5C24.4497 0.5 21.3663 2.23147 19.5 4.88169C17.6337 2.23147 14.5503 0.5 11.0625 0.5Z" fill="#195290"/>
//             </svg>
//             </div>
//             <svg width="162" height="40" viewBox="0 0 162 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0.91435 30.5V1.40909H20.5166V6.48011H7.06492V13.4119H19.5081V18.483H7.06492V25.429H20.5734V30.5H0.91435ZM38.5867 13.554V18.3551H25.3196V13.554H38.5867Z" fill="#3F3D56"/>
//             <path d="M51.8236 30.5H42.7327L47.5622 1.40909H56.8236C59.6456 1.40909 61.9704 2.00095 63.798 3.18466C65.6351 4.36837 66.9135 6.05871 67.6332 8.25568C68.3624 10.4527 68.4713 13.0758 67.9599 16.125C67.4675 19.1174 66.5111 21.6884 65.0906 23.8381C63.6796 25.9782 61.852 27.6259 59.6077 28.7812C57.3728 29.9271 54.7781 30.5 51.8236 30.5ZM46.781 27.375H51.9372C54.3425 27.375 56.4164 26.9015 58.1588 25.9545C59.9107 25.0076 61.3217 23.6581 62.3918 21.9062C63.4713 20.1544 64.2099 18.0758 64.6077 15.6705C65.0054 13.3598 64.9675 11.3759 64.494 9.71875C64.03 8.05208 63.1162 6.77367 61.7526 5.88352C60.3984 4.9839 58.5849 4.53409 56.3122 4.53409H50.5594L46.781 27.375ZM77.0918 31.0114C75.7092 31.0114 74.4971 30.7509 73.4554 30.2301C72.4137 29.6998 71.642 28.9375 71.1401 27.9432C70.6382 26.9394 70.5009 25.7273 70.7281 24.3068C70.9459 23.0568 71.3673 22.0436 71.9923 21.267C72.6173 20.4811 73.3749 19.8655 74.2651 19.4205C75.1647 18.9659 76.1306 18.6297 77.1628 18.4119C78.2045 18.1847 79.2414 18.0095 80.2736 17.8864C81.6183 17.7159 82.712 17.5833 83.5548 17.4886C84.3976 17.3939 85.0321 17.2377 85.4582 17.0199C85.8844 16.8021 86.1448 16.428 86.2395 15.8977V15.7841C86.4668 14.392 86.2821 13.3078 85.6855 12.5312C85.0889 11.7453 84.0236 11.3523 82.4895 11.3523C80.8986 11.3523 79.5681 11.7027 78.498 12.4034C77.4279 13.1042 76.6372 13.8523 76.1259 14.6477L73.1713 13.5114C73.9478 12.1856 74.8759 11.1534 75.9554 10.4148C77.0349 9.66667 78.1666 9.14583 79.3503 8.85227C80.534 8.54924 81.6751 8.39773 82.7736 8.39773C83.4743 8.39773 84.2651 8.48295 85.1457 8.65341C86.0264 8.81439 86.8503 9.15057 87.6173 9.66193C88.3938 10.1733 88.9762 10.9451 89.3645 11.9773C89.7622 13.0095 89.819 14.392 89.5349 16.125L87.1486 30.5H83.7963L84.3077 27.5455H84.1372C83.8342 28.0189 83.3702 28.5256 82.7452 29.0653C82.1296 29.6051 81.3484 30.0644 80.4014 30.4432C79.4639 30.822 78.3607 31.0114 77.0918 31.0114ZM78.0577 28C79.3834 28 80.5435 27.7396 81.5378 27.2188C82.5416 26.6979 83.3465 26.0256 83.9526 25.2017C84.5681 24.3778 84.9516 23.5114 85.1031 22.6023L85.6145 19.5341C85.444 19.7045 85.1079 19.8608 84.606 20.0028C84.1041 20.1354 83.5359 20.2538 82.9014 20.358C82.2764 20.4527 81.6656 20.5379 81.069 20.6136C80.4819 20.6799 80.0084 20.7367 79.6486 20.7841C78.7584 20.8977 77.9109 21.0824 77.106 21.3381C76.3105 21.5843 75.6382 21.9583 75.0889 22.4602C74.5491 22.9527 74.213 23.625 74.0804 24.4773C73.8815 25.642 74.1609 26.5227 74.9185 27.1193C75.676 27.7064 76.7224 28 78.0577 28ZM106.092 8.68182L105.638 11.5227H94.3308L94.7854 8.68182H106.092ZM98.9331 3.45455H102.285L98.8195 24.25C98.668 25.197 98.6916 25.9072 98.8905 26.3807C99.0988 26.8447 99.4113 27.1572 99.828 27.3182C100.254 27.4697 100.713 27.5455 101.206 27.5455C101.575 27.5455 101.878 27.5265 102.115 27.4886C102.352 27.4413 102.541 27.4034 102.683 27.375L102.91 30.3864C102.655 30.4716 102.309 30.5568 101.873 30.642C101.447 30.7367 100.922 30.7841 100.297 30.7841C99.3498 30.7841 98.4596 30.5805 97.6263 30.1733C96.793 29.7661 96.1537 29.1458 95.7087 28.3125C95.2636 27.4792 95.1452 26.428 95.3536 25.1591L98.9331 3.45455ZM107.198 30.5L110.835 8.68182H114.187L110.551 30.5H107.198ZM113.534 4.98864C112.88 4.98864 112.317 4.7661 111.843 4.32102C111.379 3.87595 111.147 3.34091 111.147 2.71591C111.147 2.09091 111.379 1.55587 111.843 1.1108C112.317 0.665718 112.88 0.44318 113.534 0.44318C114.187 0.44318 114.746 0.665718 115.21 1.1108C115.683 1.55587 115.92 2.09091 115.92 2.71591C115.92 3.34091 115.683 3.87595 115.21 4.32102C114.746 4.7661 114.187 4.98864 113.534 4.98864ZM121.902 17.375L119.743 30.5H116.391L120.027 8.68182H123.266L122.697 12.0909H122.982C123.663 10.983 124.587 10.0928 125.751 9.42045C126.916 8.73864 128.322 8.39773 129.97 8.39773C131.429 8.39773 132.66 8.70076 133.663 9.30682C134.677 9.90341 135.392 10.8125 135.808 12.0341C136.234 13.2462 136.296 14.7803 135.993 16.6364L133.663 30.5H130.311L132.584 16.8636C132.868 15.1591 132.645 13.8239 131.916 12.858C131.196 11.892 130.055 11.4091 128.493 11.4091C127.413 11.4091 126.414 11.6411 125.496 12.1051C124.587 12.5691 123.815 13.2462 123.18 14.1364C122.555 15.0265 122.129 16.1061 121.902 17.375ZM146.932 39.1364C145.303 39.1364 143.94 38.928 142.841 38.5114C141.743 38.1042 140.862 37.5644 140.199 36.892C139.536 36.2292 139.035 35.5189 138.694 34.7614L141.705 32.8864C141.932 33.2841 142.226 33.7386 142.586 34.25C142.945 34.7708 143.49 35.2206 144.219 35.5994C144.958 35.9877 145.995 36.1818 147.33 36.1818C149.082 36.1818 150.616 35.7557 151.932 34.9034C153.249 34.0511 154.063 32.7159 154.375 30.8977L155.057 26.4659H154.773C154.47 26.8636 154.049 27.3561 153.509 27.9432C152.969 28.5208 152.245 29.0369 151.336 29.4915C150.427 29.9366 149.262 30.1591 147.841 30.1591C146.07 30.1591 144.555 29.7424 143.296 28.9091C142.036 28.0758 141.132 26.8636 140.583 25.2727C140.043 23.6818 139.963 21.75 140.341 19.4773C140.711 17.2424 141.421 15.2964 142.472 13.6392C143.533 11.9725 144.839 10.6847 146.392 9.77557C147.945 8.85701 149.641 8.39773 151.478 8.39773C152.898 8.39773 153.987 8.63447 154.745 9.10795C155.512 9.57197 156.07 10.1023 156.421 10.6989C156.771 11.286 157.036 11.7689 157.216 12.1477H157.557L158.125 8.68182H161.364L157.671 31.125C157.358 33 156.681 34.5246 155.64 35.6989C154.598 36.8826 153.32 37.7491 151.804 38.2983C150.289 38.857 148.665 39.1364 146.932 39.1364ZM148.694 27.1477C150.029 27.1477 151.217 26.84 152.259 26.2244C153.31 25.6089 154.181 24.7235 154.873 23.5682C155.564 22.4129 156.042 21.0303 156.307 19.4205C156.572 17.8485 156.553 16.4612 156.25 15.2585C155.947 14.0559 155.374 13.1136 154.532 12.4318C153.698 11.75 152.605 11.4091 151.25 11.4091C149.82 11.4091 148.585 11.7689 147.543 12.4886C146.511 13.2083 145.673 14.1742 145.029 15.3864C144.385 16.5985 143.94 17.9432 143.694 19.4205C143.447 20.9356 143.457 22.2756 143.722 23.4403C143.987 24.5956 144.527 25.5047 145.341 26.1676C146.165 26.821 147.283 27.1477 148.694 27.1477Z" fill="#FF4100"/>
//             </svg>
//           </div>
//           <h2>Ready for Exciting Connections? 💕</h2>
//           <p className="mt-5 p-5 text-center text-neut_200 mb-10">
//             Find your perfect match, connect instantly, and indulge in unforgettable experiences.

//             🔥 Sign up now & start exploring!</p>
//          </div>
//       </div>

//       {/* Right hand side */}
//         <div className="w-[50%] ">
//           <div className="px-10 mb-4">

//           <h1 className="font-semibold text-2xl mb-2">Register</h1>
//           <p className="text-sm">Already hav an account? <Link className="text-main_200" to='/signin'>Login here</Link></p>
//           </div>
//           <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-3 justify-start px-10">

//             <div className="flex flex-col items-start justify-start w-full">
//               <label className="text-neut_100 mb-2" htmlFor="email">Email</label>
//               <input {...register('email')} className="bg-main_100 w-1/2 outline-none border-none px-3 py-2 rounded-md" type="text" placeholder="example@gmail.com"/>
//               {errors?.email ? <p className="text-sm text-red-400">{errors?.email?.message}</p> : null}
//             </div>
//           <div className="w-full">
//             {/* <label htmlFor="phone">Phone Number</label> */}
//               <label className="text-neut_100 mb-2" htmlFor="phone">Phone Number</label>
//               <div className="bg-main_100 w-1/2 outline-none border-none px-3 py-2 rounded-md flex items-center justify-start">
//               <select {...register('country_number')} name="country_code" className="text-neut_200 outline-none bg-main_100 border-none w-1/2">
//                 {countryCodes?.map((eachCountry) => (
//                   <option key={eachCountry.country} value={eachCountry.code}>
//                     {eachCountry.country} ({eachCountry.code})
//                   </option>
//                 ))}
//               </select>
//                 <input {...register('phone_number')} className="outline-none border-none bg-main_100" name="phone_number" type="text" placeholder="00000000"/>
//               </div>
//             {errors?.country_number || errors?.phone_number ? <p className="text-sm text-red-400">Phone number or country code required</p> : null}
//           </div>
//           <div className="flex flex-col items-start justify-start w-full">
//             <label className="text-neut_100 mb-2" htmlFor="password">Password</label>
//             <div className="flex bg-main_100 items-center justify-between w-1/2 rounded-md h-full px-2">
//               <input {...register('password')} className=" outline-none bg-main_100 px-3 py-2" type={passwordVisible ? 'text' : 'password'} placeholder="********"/>
//               <button onClick={handlePasswordVisible} className="text-white mr-2"><BsEye/></button>
//             </div>
//             {errors?.password ? <p className="text-sm text-red-400">{errors?.password?.message}</p> : null}
//           </div>

//           <div className="flex flex-col items-start justify-start w-full">
//             <label className="text-neut_100 mb-2" htmlFor="confirm_password">Confirm Password</label>
//             <div className="flex bg-main_100 items-center justify-between w-1/2 rounded-md h-full px-2">
//               <input {...register('confirm_password')} className=" outline-none bg-main_100 px-3 py-2" type={confirmPasswordVisible ? 'text' : 'password'} placeholder="********"/>
//               <button onClick={handleConfirmPasswordVisible} className="text-white mr-2"><BsEye/></button>
//             </div>
//             {errors?.confirm_password ? <p className="text-sm text-red-400">{errors?.confirm_password?.message}</p> : null}
//           </div>

//           <button className="mt-5 rounded-md bg-main_600 text-white w-1/2 p-2">{loading ? 'Loading ....' : 'Submit'}</button>
//           </form>
//         </div>
//         <Modal showModal={showModal} setShowModal={setShowModal}>
//             <FiMail className="text-yellow-600 text-[2rem] text-center w-full mx-auto"/>
//             <h1 className="text-center">Congratulations 💕</h1>
//             <p className="text-center">
//               A verification link has been sent to your email and an OTP code, to you phone number. Kindly click the link to finish up your registration.
//             </p>
//         </Modal>
//     </div>
//   )
// }

// export default Register

// -------- version 2 --------
import { BsEye } from "react-icons/bs";
import countryCodes from "../resources/registration";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validation/authentication";
import Modal from "../component/modals";
import { FiMail } from "react-icons/fi";
import { useMakerequest } from "../hook/useMakeRequest";
import { REGISTER_URL } from "../constant/resources";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState(null)
  const makeRequest = useMakerequest()

  const handlePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleConfirmPasswordVisible = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const onSubmit = (data) => {

    const onSuccess = (data)=>{
      setShowModal(true)
      setUserEmail(data?.email)
    }

    setLoading(true);
    makeRequest(
      REGISTER_URL,
      'POST',
      data,
      onSuccess,
      (error)=>{console.log(error)},
      ()=>{setLoading(false)}
    )
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center min-h-screen bg-gray-100">
      {/* Left Side */}
      <div className="sm:w-1/2 w-full h-screen flex items-center justify-center bg-gradient-to-b from-white to-transparent relative overflow-hidden">
        <div className="absolute bottom-0">
          <svg
            width="368"
            height="188"
            viewBox="0 0 368 188"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M368 187.5C368 137.772 348.246 90.0806 313.083 54.9175C277.919 19.7544 230.228 3.75437e-06 180.5 0C130.772 -3.75437e-06 83.0806 19.7544 47.9175 54.9175C12.7544 90.0805 -6.99999 137.772 -7 187.5L180.5 187.5H368Z"
              fill="url(#paint0_linear_40_331)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_40_331"
                x1="180"
                y1="-195.5"
                x2="180"
                y2="188"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-center p-8 z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-2 border-2 border-main_200 rounded-lg shadow-sm">
              <svg
                width="39"
                height="33"
                viewBox="0 0 39 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0625 0.5C5.36707 0.5 0.75 5.11709 0.75 10.8125C0.75 21.125 12.9375 30.5 19.5 32.6808C26.0625 30.5 38.25 21.125 38.25 10.8125C38.25 5.11709 33.6329 0.5 27.9375 0.5C24.4497 0.5 21.3663 2.23147 19.5 4.88169C17.6337 2.23147 14.5503 0.5 11.0625 0.5Z"
                  fill="#195290"
                />
              </svg>
            </div>
            <svg
              width="162"
              height="40"
              viewBox="0 0 162 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Your SVG paths unchanged */}
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready for Exciting Connections? 💕
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Find your perfect match, connect instantly, and indulge in unforgettable experiences. 🔥 Sign up now & start exploring!
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="sm:w-1/2 w-full p-8 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Register</h1>
          <p className="text-sm text-gray-600 mb-6">
            Already have an account?{" "}
            <Link className="text-main_200 hover:underline" to="/login">
              Login here
            </Link>
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                {...register("email")}
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main_200 transition"
                type="text"
                placeholder="example@gmail.com"
              />
              {errors?.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1" htmlFor="phone">
                Phone Number
              </label>
              <div className="flex items-center bg-gray-100 border border-gray-300 rounded-md">
                <select
                  {...register("countryNumber")}
                  name="country_code"
                  className="px-2 py-2 bg-gray-100 border-none focus:outline-none rounded-l-md"
                >
                  {countryCodes?.map((eachCountry) => (
                    <option key={eachCountry.country} value={eachCountry.code}>
                      {eachCountry.country} ({eachCountry.code})
                    </option>
                  ))}
                </select>
                <input
                  {...register("phoneNumber")}
                  className="w-full px-4 py-2 bg-gray-100 border-none focus:outline-none"
                  type="text"
                  placeholder="00000000"
                />
              </div>
              {(errors?.countryNumber || errors?.phoneNumber) && (
                <p className="text-sm text-red-500 mt-1">
                  Phone number or country code required
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-sm text-gray-700 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex items-center bg-gray-100 border border-gray-300 rounded-md">
                <input
                  {...register("password")}
                  className="w-full px-4 py-2 bg-gray-100 border-none focus:outline-none"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="********"
                />
                <button
                  type="button"
                  onClick={handlePasswordVisible}
                  className="px-3 text-gray-600 hover:text-main_200"
                >
                  <BsEye />
                </button>
              </div>
              {errors?.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>
            <div>
              <label
                className="block text-sm text-gray-700 mb-1"
                htmlFor="confirm_password"
              >
                Confirm Password
              </label>
              <div className="flex items-center bg-gray-100 border border-gray-300 rounded-md">
                <input
                  {...register("confirmPassword")}
                  className="w-full px-4 py-2 bg-gray-100 border-none focus:outline-none"
                  type={confirmPasswordVisible ? "text" : "password"}
                  placeholder="********"
                />
                <button
                  type="button"
                  onClick={handleConfirmPasswordVisible}
                  className="px-3 text-gray-600 hover:text-main_200"
                >
                  <BsEye />
                </button>
              </div>
              {errors?.confirmPassword && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-main_200 text-white rounded-md shadow-md hover:bg-main_600 transition disabled:bg-main_100"
              disabled={loading}
            >
              {loading ? 
              <p>...loading</p>
               : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="text-center p-6">
          <FiMail className="text-yellow-500 text-4xl mx-auto mb-4" />
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            Congratulations 💕
          </h1>
          <p className="text-gray-600">
            A verification link has been sent to your email and an OTP code to your phone number. Kindly click the link to finish your registration.
          </p>
          <div className="w-full mt-4">
            <Link to={`/verify_otp?admin=${userEmail}`} className="px-4 py-2 bg-main_200 text-white">Verify OTP</Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Register;