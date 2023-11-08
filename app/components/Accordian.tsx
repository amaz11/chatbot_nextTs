'use client'
import React, { useState } from 'react'

const Accordian : React.FC = () => {
    const [accordian, setAccordian] = useState(false)
  return (
    <div className='relative'>
        <div className='cursor-pointer' onClick={()=>setAccordian(!accordian)}>Accordian</div>
        <div className={`${accordian? '' :"absolute top-0 left-0 opacity-0 -z-10"} duration-500 transition-all`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quia possimus magni ipsa, vitae qui in aliquam molestias recusandae distinctio.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quia possimus magni ipsa, vitae qui in aliquam molestias recusandae distinctio.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quia possimus magni ipsa, vitae qui in aliquam molestias recusandae distinctio.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quia possimus magni ipsa, vitae qui in aliquam molestias recusandae distinctio.
        </div>
    </div>
  )
}

export default Accordian