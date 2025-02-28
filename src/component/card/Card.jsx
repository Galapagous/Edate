import React from 'react'

const Card = ({color, icon, title, value}) => {
  return (
    <div
      style={{backgroundColor: color}}
      className={`w-full h-[7.5rem] text-white rounded-md p-4 flex flex-col justify-between`}
    >
      <div className="w-full flex justify-between gap-4">
        <p className="text-neut-400 text-base">{title}</p>
        {icon}
      </div>
      <h3 className="text-neut-400 font-bold text-xl">{value}</h3>
    </div>
  )
}

export default Card