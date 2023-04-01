import React from 'react'

import "./Heading.css"
const Heading = (props) => {
    return (
        <>
            <div className='main_container_second_contact_right-mainHeading-heading'>
               {props.title}
                <div className='main_container_second_contact_right-mainHeading-heading-border'></div>
            </div>
        </>
    )
}

export default Heading