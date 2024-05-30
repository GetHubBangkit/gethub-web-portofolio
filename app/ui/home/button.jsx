import React from 'react'

const Button = ({buttonText}) => {
  return (
    <button className="bg-white text-cyan-400 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 mb-8">
    {buttonText}
  </button>
  )
}

export default Button