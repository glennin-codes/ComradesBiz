import React from 'react'

import "./AppButton.css"

const AppButton = (props) => {
  return (
    <>
        <div className='app-btn'>
            {props.title}
        </div>
    </>
  )
}

export default AppButton