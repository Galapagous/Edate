import { Children, useEffect, useState } from "react"
import SliderWrapper from "./SliderWrapper"

const Carousel = ({children, startIndex}) => {
    const [currentStep, setCurrentStep] = useState(1)
    const totalChildren = Children.count(children)
  
    const hanldePreviousClick = ()=>{
        setCurrentStep((prev)=> (prev === 1 ? totalChildren : prev - 1))
    }

    const handleNextClick = ()=>{
        setCurrentStep((prev)=>(prev === totalChildren ? 1 : prev + 1))
    }

    useEffect(()=>{
        if(startIndex) {
            setCurrentStep(startIndex + 1)
        }
    }, [startIndex])
    return (
    <div className="w-full flex flex-shrink-0 overflow-x-hidden relative group">
        {
            Children?.map(children, (child, index)=>{
                return(
                    <SliderWrapper
                        styles={{
                            height: index + 1 === currentStep ? 'auto' : '5rem',
                            overflowX: 'hidden'
                        }}
                        removePadding
                        key={index}
                        currentStep={currentStep}
                    >
                        {child}
                    </SliderWrapper>
                )
            })
        }
        <div className="flex items-center justify-center gap-2">
            <button
                onClick={hanldePreviousClick}
                className=""
            >
                Prev
            </button>
            <button
                onClick={handleNextClick}
                className=""
                >
                Next
            </button>
        </div>
    </div>
  )
}

export default Carousel