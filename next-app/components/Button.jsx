import React from 'react'

function Button({title,onClick}) {
  return (
    <button onClick={onClick} className="bg-slate-100 hover:scale-105 text-base font-bold active:scale-95 py-1 px-4 w-48 rounded-lg shadow-md my-2 text-blue-800 ">
   {title}
  </button>
  )
}

export default Button