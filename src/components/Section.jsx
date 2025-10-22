import React from 'react'

function Section({content}) {
  return (
    <div className='flex items-center justify-center h-full w-full text-white text-4xl font-bold'>
      {content}
    </div>
  )
}

export default Section