import React from 'react';

const Loader = ({ isLoading, children, size = 'medium', color = 'blue' }) => {
  // Size variants
  const sizeVariants = {
    small: 'w-4 h-4 border-2',
    medium: 'w-8 h-8 border-3',
    large: 'w-12 h-12 border-4'
  };
  
  // Color variants
  const colorVariants = {
    blue: 'border-blue-500',
    red: 'border-red-500',
    green: 'border-green-500',
    purple: 'border-purple-500',
    gray: 'border-gray-500'
  };
  
  // If not loading, just render children
  if (!isLoading) {
    return children || null;
  }
  
  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <div 
        className={`
          ${sizeVariants[size] || sizeVariants.medium}
          ${colorVariants[color] || colorVariants.blue}
          border-t-transparent
          rounded-full
          animate-spin
        `}
      />
    </div>
  );
};

// Usage example component
const LoaderExample = () => {
  // This would typically be your loading state from a hook or state management
  const [isLoading, setIsLoading] = React.useState(true);
  
  return (
    <div className="space-y-8">
      {/* Basic usage */}
      <Loader isLoading={isLoading}>
        <div className="p-4 bg-white rounded shadow">
          Content loaded successfully!
        </div>
      </Loader>
      
      {/* Different sizes and colors */}
      <div className="flex space-x-4">
        <Loader isLoading={true} size="small" color="red" />
        <Loader isLoading={true} size="medium" color="green" />
        <Loader isLoading={true} size="large" color="purple" />
      </div>
      
      {/* Toggle button */}
      <button
        onClick={() => setIsLoading(!isLoading)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Toggle Loading State
      </button>
    </div>
  );
};

export default Loader;