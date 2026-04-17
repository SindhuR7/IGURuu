import React, { useState } from 'react'
import { VscEye, VscEyeClosed  } from "react-icons/vsc";


const Inputform = ({label,type,placeholder,name, value,onChange }) => {
  const [visible,setVisible] = useState(false)

  return (
    <div className='flex flex-col items-start gap-1 w-full'>
        <label className='text-[18px] text-[#ff6d34] font-semibold w-full' htmlFor={name}>{label}</label>
        {
          type === 'password' ? (
<div className='w-full flex items-center justify-between px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff6d34]'>
  <input name={name} value={value} type={visible ? 'text' : 'password'}  placeholder={placeholder} onChange={onChange} className='outline-none focus:outline-none' />
  <span className='text-[#ff6d34] text-xl' onClick={(e) => setVisible(!visible)}>
    {
      visible ? <VscEye/> : <VscEyeClosed/>
    }
  </span>
</div>
          ) : (
            <input name={name} value={value} type={type} placeholder={placeholder} onChange={onChange} className='w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff6d34]'/>
          )
        }
    </div>
  )
}

export default Inputform