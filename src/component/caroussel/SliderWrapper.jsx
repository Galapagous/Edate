const SliderWrapper = ({
    currentStep,
    children,
    additionalClassNames,
    removePadding,
    styles,
    ...props
}) => {
  return (
    <div 
        style={{ translate: `${-100 * (currentStep - 1)}%`, ...styles }}
        className={
            `${removePadding ? '' : 'p-6 py-10'} w-full flex flex-col gap-8 items-start flex-shrink-0 transition-[translate] duration-500` + 
            additionalClassNames
        }

        {...props}
    >
        {children}
    </div>
  )
}

export default SliderWrapper