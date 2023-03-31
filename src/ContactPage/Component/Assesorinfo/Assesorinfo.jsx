import React from 'react'


import "./Assesorinfo.css"
const Assessorinfo = (props) => {
  return (
    <>
         <div className='main_container_info'>
                <div className='main_container_info-contacts-list'>
                    <div className='main_container_info-lists'>
                        <h6 className='main_container_info-lists-h6'>
                           {props.title}
                        </h6>
                        <p className='main_container_info-lists-para'>
                            {props.name} <br />
                            {props.email} <br />
                            {props.phone}
                        </p>

                    </div>

                </div>
            </div>
    </>
  )
}

export default Assessorinfo