import { useNavigate, useSearchParams } from "react-router-dom"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import StepFour from "./StepFour"
import StepFive from "./StepFive"
import { BiArrowBack } from "react-icons/bi"
import StepSix from "./StepSix"
import StepSeven from "./StepSeven"
import StepEight from "./StepEight"
import Welcome from "./Welcome"
import { useState } from "react"
import { uploadToCloudinary } from "../../utils/uploadCloudinary"
import { useMakerequest } from "../../hook/useMakeRequest"
import { PROFILE_URL } from "../../constant/resources"

const Onboarding = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentStep = parseInt(searchParams.get('currentStep')) || 1
  const email = searchParams.get('admin')
  const [profile, setProfile] = useState({
    userEmail: email
  })
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState(null)
  const makeRequest = useMakerequest()
  const [submitLoading, setSubmitLoading] = useState(false)
  const navigate = useNavigate()
  
  const widthPercentage = (currentStep / 9) * 100

  const handleChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    } else {
      setProfile({ ...profile, [e.target.name]: e.target.value });
    }
  };

  const views = {
    1:<StepOne handleChange={handleChange}/>,
    2: <StepTwo handleChange={handleChange}/>,
    3: <StepThree handleChange={handleChange}/>,
    4: <StepFour handleChange={handleChange}/>,
    5: <StepFive handleChange={handleChange}/>,
    6: <StepSix handleChange={handleChange}/>,
    7: <StepSeven handleChange={handleChange}/>,
    8: <StepEight handleChange={handleChange}/>,
    9: <Welcome/>,
  }

  const renderView = ()=>{
    return (views[currentStep] || <StepOne/>
    )
  }

  const handleNext = async()=>{
    setSearchParams({
      ...Object.fromEntries(searchParams),

      currentStep : currentStep === 9 ? navigate('/login') : currentStep + 1
    })
  }

  const handleUpload = async ()=>{
      setLoading(true)
      try {
        const response = await uploadToCloudinary(file)
        // console.log(response)
        setProfile({...profile, profilePicture: response})
        setSearchParams({
          ...Object.fromEntries(searchParams),
    
          currentStep : 7
        })
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }

  }

  const handleSubmit = ()=>{
    setSubmitLoading(true)
    makeRequest(
      PROFILE_URL,
      'POST',
      profile,
      (data)=>{
        setSearchParams({
          ...Object.fromEntries(searchParams),
    
          currentStep : 9
        })
      },
      (error)=>{console.log(error)},
      ()=>{setSubmitLoading(false)}
    )
  }
  
  const handlePrev = ()=>{
    setSearchParams({
      ...Object.fromEntries(searchParams),
      currentStep : currentStep === 1 ? 1 : currentStep - 1
    })

  }

  return (
    <div className="w-screen relative min-h-screen bg-backgound_primary p-10 flex items-center justify-start flex-col overflow-auto">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
      <svg width="368" height="188" viewBox="0 0 368 188" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M368 187.5C368 137.772 348.246 90.0806 313.083 54.9175C277.919 19.7544 230.228 3.75437e-06 180.5 0C130.772 -3.75437e-06 83.0806 19.7544 47.9175 54.9175C12.7544 90.0805 -6.99999 137.772 -7 187.5L180.5 187.5H368Z" fill="url(#paint0_linear_40_331)"/>
        <defs>
        <linearGradient id="paint0_linear_40_331" x1="180" y1="-195.5" x2="180" y2="188" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        </defs>
      </svg>
      </div>
      <div className="w-1/2 h-2 bg-gray-200 relative z-30">
        <div 
          className="bg-indicator h-2 rounded-md transition-all duration-300"
          style={{ width: `${widthPercentage}%` }}
          ></div>
      </div>
      {/* main section */}
      <div className="relative z-30 mt-20 w-1/3">
        {renderView()}
      </div>
      <div className="mt-20 relative z-20 flex items-center justify-center gap-2">
        <button onClick={handlePrev} className="p-3 cursor-pointer rounded-md border-2 border-main_600">
          <BiArrowBack/>
        </button>
        {
          currentStep === 6 ? 
          <button className="px-4 py-2 bg-main_200 text-white" onClick={handleUpload}>{loading ? '...Loading' : "Upload Image"}</button>
          :
         null
        }
        {
          currentStep === 8 ? 
          <button className="px-4 py-2 bg-main_200 text-white" onClick={handleSubmit}>{submitLoading ? '...Loading' : "Submit"}</button>
          :
         null
        }

        {
          currentStep !== 6 && currentStep !== 8 ? 
          <button onClick={handleNext} className="bg-main_600 cursor-pointer rounded-md text-white px-6 py-2">
          {currentStep > 8 ? 'Finish' : 'Continue'}
        </button> :
        null
        }
        
      </div>
    </div>
  )
}

export default Onboarding