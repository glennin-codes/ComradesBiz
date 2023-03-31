import React from 'react'

import "./Department.css"

const Department = (props) => {
    return (
        <>
            <div className='main_container_department'>
                <div className='main_container_department-contacts-list'>
                    <div className='main_container_department-lists'>
                        <h6 className='main_container_department-lists-h6'>
                            {props.title}
                        </h6>
                        <p className='main_container_department-lists-para'>
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

export default Department