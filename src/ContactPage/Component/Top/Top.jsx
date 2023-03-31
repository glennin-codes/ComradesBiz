import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsToggleOn } from 'react-icons/bs'
import lang from '../../assets/images/lan.png'

import "./Top.css"

const Top = () => {
    return (
        <>

            <div className="top_main_container">
                <div className='left'></div>
                <div className='right'>
                    <div className='top_search-container'>
                        <input placeholder='Search' type="text" required/>
                        <div className='top_search-container-icon'><BiSearchAlt2 /></div>
                    </div>

                    <div className='top_main_container_language'>
                        <p>English</p>
                        <img src={lang} alt="language" className='top_main_container_language-img' />
                    </div>

                    <div className='top_main_container-dark'>
                        <p className='top_main_container-dark-para'>Dark Mode</p>
                        <div className='top_search-container-icon dark-icon'><BsToggleOn /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Top