import React from 'react'
function Navbar({sections, activeId}) {
  return (
    <div className='flex bg-red-600 py-10 justify-around mx-auto fixed left-0 right-0 top-0'>
      <a className='text-4xl font-bold' href="#">Logo</a>
      <nav className='flex gap-11 justify-center'>
        {
          sections.map((section)=>(
            <a
            key = {section.id} 
            href= {`#${section.id}`}
            className= {`text-2xl transition-colors duration-300 ${activeId === section.id ? `text-white`: `text-gray-300`}`}
            >
              {section.title}
            </a>
          ))
        }
      </nav>
    </div>
  )
}

export default Navbar