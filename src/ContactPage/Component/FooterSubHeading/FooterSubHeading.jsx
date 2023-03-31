import React from 'react'

import "./FooterSubHeading.css"

const FooterSubHeading = (props) => {
    return (
        <>
            <div className='FooterSubHeading'>
                <h1> {props.heading} </h1>
            </div>
        </>
    )
}

export default FooterSubHeading