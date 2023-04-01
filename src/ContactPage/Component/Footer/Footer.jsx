import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
import Address from '../Address/Address'
import FooterSubHeading from '../FooterSubHeading/FooterSubHeading'

import "./Footer.css"

const FooterContact = () => {
    return (
        <>
            <div className='main_container_footer'>

                <div className='main_container_footer-info'>
                    <img src={Logo} alt="logo" className='main_container_footer-info-img' />
                    <Address />
                </div>
                {/*  */}
                <div className='grid'>
                    <div className='main_container_footer-sitemap'>
                        <div className='main_container_footer-sitemap-heading'>
                            <FooterSubHeading heading="SITE MAP" />
                        </div>
                        <div className="main_container_footer-sitemap-options">
                            <ul>
                                <li>Assessors` Home</li>
                                <li>Property Inspection</li>
                                <li>Forms & Requests</li>
                                <li>Assessors` Tools</li>
                            </ul>
                        </div>
                    </div>

                    <div className='main_container_footer-contact'>
                        <div className='main_container_footer-sitemap-heading'>
                            <FooterSubHeading heading="CONTACT" />
                        </div>
                        <div className='main_container_footer-contact-contentd'>
                            <ul>
                                <li>Contact</li>
                                <li>(613)- 7865343</li>
                            </ul>

                        </div>
                    </div>

                    <div className='main_container_footer-office-hours'>
                        <div>
                            <FooterSubHeading heading="OFFICE HOOURS" />
                        </div>

                        <div className='main_container_footer-office-hours-content'>
                            <div className='main_container_footer-office-hours-days'>
                                <ul>
                                    <li>Monday</li>
                                    <li>Tuesday</li>
                                    <li>Wednesday </li>

                                    <li>Thursday</li>
                                    <li>Friday</li>

                                </ul>
                            </div>

                            <div className='main_container_footer-office-hours-hours'>
                                <ul>
                                    <li>8:30 AM to 4:30 PM</li>
                                    <li>8:30 AM to 4:30 PM</li>
                                    <li>8:30 AM to 4:30 PM</li>
                                    <li>8:30 AM to 4:30 PM</li>
                                    <li>8:30 AM to 4:30 PM</li>


                                </ul>
                            </div>

                        </div>

                    </div>

                </div>


                {/*  */}

            </div>
            <div className='footer-bottom'>
                <div className='footer-bottom-content'>
                    <Link to = {'/'} className = "footer-bottom-links">Privacy Policy</Link>
                    <Link to = {'/'} className = "footer-bottom-links">Terms of use</Link>
                    <Link to = {'/'} className = "footer-bottom-links">Web Accessibility</Link>
                </div>
            </div>

        </>
    )
}

export default FooterContact