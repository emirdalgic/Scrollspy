import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {
  const sections = [
    { id: "section1", title: "Hero", bg: "bg-blue-600" },
    { id: "section2", title: "About", bg: "bg-red-600" },
    { id: "section3", title: "Project", bg: "bg-yellow-600" },
    { id: "section4", title: "Contact", bg: "bg-gray-800" },
  ];

  const [activeId, setActiveId] = useState("")
  const sectionRefs = useRef({})

  useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>{
          if(entry.isIntersecting){
            setActiveId(entry.target.id)
          }
        })
      },
      {threshold: 0.6}
    )
    sections.forEach((section)=>{
      if(sectionRefs.current[section.id]){
        observer.observe(sectionRefs.current[section.id]);
      }
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <Navbar sections = {sections} activeId = {activeId} />
      <div className='grid text-center justify-center'>
        {
          sections.map((section)=> (
            <div
            key = {section.id}
            id = {section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
            className= {`min-h-screen min-w-screen ${section.bg} flex items-center justify-center`} 
            >
              <Section content = {section.title} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;

