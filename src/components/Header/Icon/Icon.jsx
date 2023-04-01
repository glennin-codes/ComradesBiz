import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

import "./Icon.css"

const Icon = () => {
  return (
    <>
      <div className='icon'>
        <IoLocationOutline />
      </div>
    </>
  )
}


export const HumBurgerIcon = () => {
  return (
    <>
      <div className='icon'>
      <HiOutlineMenuAlt3 />
      </div>
    </>
  )
}

export default Icon