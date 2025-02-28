import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { createEventStep } from './data';
import Location from './event-step/Location';
import Profile from './event-step/Profile';
import EventType from './event-step/EventType';
import Attendance from './event-step/Attendance';
import Venue from './event-step/Venue';

const CreateEvent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentStepParam = searchParams.get('step');
  const [currentStep, setCurrentStep] = useState(currentStepParam ? parseInt(currentStepParam) : 1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState(null);
  
  const [formData, setFormData] = useState({
    country: '',
    state: '',
  });

  // Sync URL param with state
  useEffect(() => {
    if (currentStepParam) {
      setCurrentStep(parseInt(currentStepParam));
    } else {
      // Initialize URL if no step param exists
      setSearchParams({ step: 1 });
    }
  }, [currentStepParam, setSearchParams]);
  
  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe && currentStep < createEventStep.length) {
      // Swipe left to go to next step
      setSlideDirection('left');
      setIsAnimating(true);
      setTimeout(() => {
        goToStep(currentStep + 1);
        setIsAnimating(false);
      }, 300);
    }
    
    if (isRightSwipe && currentStep > 1) {
      // Swipe right to go to previous step
      setSlideDirection('right');
      setIsAnimating(true);
      setTimeout(() => {
        goToStep(currentStep - 1);
        setIsAnimating(false);
      }, 300);
    }
    
    // Reset
    setTouchStart(null);
    setTouchEnd(null);
  };
  
  // Update URL when changing steps
  const goToStep = (stepNumber) => {
    setSearchParams({ step: stepNumber });
  };
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleNextStep = () => {
    if (currentStep < createEventStep.length) {
      setSlideDirection('left');
      setIsAnimating(true);
      setTimeout(() => {
        goToStep(currentStep + 1);
        setIsAnimating(false);
      }, 300);
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setSlideDirection('right');
      setIsAnimating(true);
      setTimeout(() => {
        goToStep(currentStep - 1);
        setIsAnimating(false);
      }, 300);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission
    console.log('Form submitted:', formData);
    // You could send the data to an API here
    alert('Form submitted successfully!');
  };
  
  // Render the appropriate form section based on current step
  const renderFormSection = () => {
    switch (currentStep) {
      case 1:
        return (
          <Location formData={formData} setFormData={setFormData} handleInputChange={handleInputChange}/>
        );
      case 2:
        return (
          <Profile formData={formData} setFormData={setFormData} handleInputChange={handleInputChange}/>
        );
      case 3:
        return (
          <EventType formData={formData} setFormData={setFormData} handleInputChange={handleInputChange}/>
        );
      case 4:
        return (
          <Attendance formData={formData} setFormData={setFormData} handleInputChange={handleInputChange}/>
        );
      case 5:
        return (
          <Venue formData={formData} setFormData={setFormData} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
        );
      default:
        return <Location formData={formData} setFormData={setFormData} handleInputChange={handleInputChange}/>;
    }
  };
  
  return (
    <div className="mx-auto p-4 w-screen">
      {/* Progress indicator */}
      <div className="mb-8 w-2/3 mx-auto mt-4">
        <div className="flex items-center justify-between w-full">
          {createEventStep.map((section) => (
            <div 
              key={section.id} 
              className={`flex-1 text-center ${
                section.id < currentStep ? 'text-main_200' : 
                section.id === currentStep ? 'text-main_200 font-medium' : 'text-gray-400'
              }`}
            >
              <div 
                className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                  section.id < currentStep ? 'border-main_200 bg-main_200 text-white' : 
                  section.id === currentStep ? 'border-main_200 text-main_200' : 'border-gray-300 text-gray-400'
                }`}
              >
                {section.id}
              </div>
              <span className="mt-1 hidden text-xs sm:block">{section.title}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex h-1 overflow-hidden">
          {createEventStep.map((section, index) => (
            <div 
              key={section.id}
              className={`flex-1 ${index < createEventStep.length - 1 ? 'mr-1' : ''} ${
                section.id < currentStep ? 'bg-main_200' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Form container with swipe functionality */}
      <form 
        className="relative overflow-hidden mx-auto w-2/3"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className={`transition-transform duration-300 ease-in-out ${
            isAnimating && slideDirection === 'left' ? 'transform -translate-x-full' :
            isAnimating && slideDirection === 'right' ? 'transform translate-x-full' : ''
          }`}
        >
          {renderFormSection()}
        </div>
        
        {/* Navigation buttons */}
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={handlePrevStep}
            className={`rounded-md border border-gray-300 py-2 px-4 text-sm shadow-sm hover:bg-gray-50 ${
              currentStep === 1 ? 'invisible' : 'visible'
            }`}
          >
            Previous
          </button>
          
          {currentStep < createEventStep.length && (
            <button
              type="button"
              onClick={handleNextStep}
              className="rounded-md border border-transparent bg-main_200 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-main_200 focus:outline-none focus:ring-2 focus:ring-main_200 focus:ring-offset-2"
            >
              Next
            </button>
          )}
        </div>
      </form>
      
      {/* Swipe instruction for mobile */}
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Swipe left or right to navigate between steps</p>
      </div>
    </div>
  );
};

export default CreateEvent;