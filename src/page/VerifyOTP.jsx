import { useRef, useState } from 'react'
import { FaLock } from "react-icons/fa6";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useMakerequest } from '../hook/useMakeRequest';
import { VERIFY_EMAIL } from '../constant/resources';

const VerifyOTP = () => {

    const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];
  const [openChangeNumber, setOpenChangeNumber] = useState(false)
  const phoneNumber = useSearchParams()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const makeRequest = useMakerequest()
  const email = searchParams.get('admin')

  const handleChange = (index, value) => {
    // Only allow single digit
    if (value.length > 1) {
      value = value.slice(-1);
    }
    
    // Only allow numbers
    if (!/^\d*$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered and next input exists
    if (value && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 7).split('');
    
    const newOtp = [...otp];
    pastedData.forEach((value, index) => {
      if (index < 6 && /^\d$/.test(value)) {
        newOtp[index] = value;
      }
    });
    
    setOtp(newOtp);
    
    // Focus the next empty input or the last input
    const nextEmptyIndex = newOtp.findIndex(val => !val);
    if (nextEmptyIndex !== -1) {
      inputRefs[nextEmptyIndex].current.focus();
    } else {
      inputRefs[5].current.focus();
    }
  };

  const handleChangeNumber = (e)=>{
    e.preventDefault()
    setOpenChangeNumber(!handleChangeNumber)
  }

  const handleSend = (e)=>{
    e.preventDefault()
    navigate(`/onboarding?admin=${email}`)
    setLoading(true)
    makeRequest(
      VERIFY_EMAIL,
      "POST",
      {
        email: email,
        code: otp.join('')
      },
      ()=>{navigate(`/onboarding?admin=${email}`)},
      (error)=>{console.log(error)},
      ()=>{setLoading(false)}
    )
  }

  const handleResendOTP = (e)=>{
    e.preventDefault()
  }

  return (
    <div className='w-screen h-screen bg-backgound_primary'>
        <div className='absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center'>
        <svg width="368" height="188" viewBox="0 0 368 188" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M368 187.5C368 137.772 348.246 90.0806 313.083 54.9175C277.919 19.7544 230.228 3.75437e-06 180.5 0C130.772 -3.75437e-06 83.0806 19.7544 47.9175 54.9175C12.7544 90.0805 -6.99999 137.772 -7 187.5L180.5 187.5H368Z" fill="url(#paint0_linear_40_331)"/>
            <defs>
            <linearGradient id="paint0_linear_40_331" x1="180" y1="-195.5" x2="180" y2="188" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            </defs>
        </svg>
        <form className='absolute w-full h-full top-0 left-0 z-40 flex flex-col items-center justify-center'>
            <div className='mb-3'>
                {/* <GiPadlock/> */}
                <FaLock className='w-[100px] h-[100px] text-main_200'/>
                <h1 className='text-2xl font-bold'>Verify OTP</h1>
            </div>
            <div>
                <h1 className='text-neut_100 mb-2'>My Code is</h1>
                <div className="flex items-center justify-center gap-3 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              className="p-2 w-12 h-12 text-center bg-main_100 text-main_600 shadow-md shadow-main_200 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              maxLength={1}
            />
          ))}
        </div>
            </div>
        <div className='text-sm flex items-center justify-between w-[300px]'>
            <button onClick={handleResendOTP} className='text-neut_200'>Resend Code</button>
            <button onClick={handleChangeNumber} className='text-red-500'>Change Number</button>
        </div>
            <button onClick={handleSend} className='mt-10 px-4 py-2 rounded-md bg-main_200 text-white'>{loading ? '...Loading' : 'Submit'}</button>
        </form>
        </div>
    </div>
  )
}

export default VerifyOTP