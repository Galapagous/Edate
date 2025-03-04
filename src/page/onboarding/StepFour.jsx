import { useState } from 'react';

const StepFour = ({handleChange}) => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const interests = [
    { id: 1, label: 'One night stand' },
    { id: 2, label: 'Dating' },
    { id: 3, label: 'Marriage' },
    { id: 4, label: 'Companion' },
    { id: 5, label: 'Hugging' },
    { id: 6, label: 'Sugar Mummy' },
    { id: 7, label: 'Sugar Daddy' },
    { id: 8, label: 'Sex' }
  ];

  const toggleInterest = (id) => {
    setSelectedInterests((prev) => {
      const updatedInterests = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];

      handleChange({
        target: { name: 'interests', value: updatedInterests }, // Send data to the parent
      });

      return updatedInterests;
    });
  };

  return (
    <div className="flex flex-col items-start justify-start gap-2 w-full">
      <h1 className="font-semibold text-2xl">What are your interests?</h1>
      <p className="text-neut_100">I am interested in:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-fit mt-2">
        {interests.map((interest) => (
          <div
            key={interest.id}
            onClick={() => toggleInterest(interest.label)}
            className={`
              px-2 py-1 w-fit  text-sm rounded-full border transition-all duration-200
              ${selectedInterests.includes(interest.label)
                ? 'bg-main_200 text-white border-main_100'
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
              }
            `}
          >
            <label>{interest.label}</label>
            <input name='interest' onChange={handleChange} className='hidden' type="checkbox" />
          </div>
        ))}
      </div>
      {selectedInterests.length > 0 && (
        <p className="mt-4 text-sm text-gray-600">
          Selected: {selectedInterests.length} interest{selectedInterests.length !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  );
};

export default StepFour;