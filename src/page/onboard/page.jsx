import { useState } from "react"
import SliderWrapper from "../../component/caroussel/SliderWrapper"
import StepOne from "../onboarding/StepOne"

const Page = () => {

    const [currentStep, setCurrentStep] = useState(1)

  return (
    <div>
        <h1>Welcome</h1>
        <div>
            <SliderWrapper currentStep={currentStep}>
                <StepOne/>
                <button>Submit</button>
            </SliderWrapper>
        </div>
    </div>
  )
}

export default Page