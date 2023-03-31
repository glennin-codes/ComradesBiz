import React from 'react'
import SubHeading from '../SubHeading/SubHeading'


import "./Address.css"

const Address = () => {
    return (
        <>
            <div className='main_container_address'>
                <div className='main_container_address-content-heading'>
                    <SubHeading heading="Kirinyaga University " />
                </div>
                <div className='main_container_address-content-heading-para'>
                    <h6 className='main_container_address-content-heading-para' >Kutus Kerugoya Road <br />
                        3rd Floor <br />
                        Ngomongo Bypass , </h6>
                </div>
            </div>
        </>
    )
}

export default Address