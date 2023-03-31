import React from 'react'

import "./SubHeading.css"

const SubHeading = (props) => {
  return (
   <>
    <h1 className='subheading'> {props.heading} </h1>
   </>
  )
}

export default SubHeading