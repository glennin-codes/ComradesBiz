import React from 'react'
import Heading from '../../Component/Heading/Heading'
import Department from '../Department/Department'

import department, { assessors } from '../../Component/Constant/Constant'

import "./Contact.css"
import Icon from '../../Component/Icon/Icon'
import Map from '../../Component/Map/Map'
import SubHeading from '../../Component/SubHeading/SubHeading'

import Address from '../../Component/Address/Address'
import AppButton from '../../Component/AppButton/App.Button'
import Assessorinfo from '../../Component/Assesorinfo/Assesorinfo'



const ContactMe = () => {
  return (
    <>
      <div className='main_container_second_contact'>
        <div className='main_container_second_contact_right'>

          <div className='main_container_second_contact_right-mainHeading'>
            <Heading title="Need to talk to us?" />
            <p> We're happy to help! Send us a message or give us a call at 617-376-1170.</p>
          </div>

          <div className='main_container_second_contact_right-options'>

            <div className='main_container_second_contact_right-options-h6'>
              <h6>Please, select the topic you want to talk about:</h6>
            </div>

            {/* Options */}
            <div className='main_container_second_contact_right-options-radio'>

              <div className='main_container_second_contact_right-options-radio-1'>
                <form className='main_container_second_contact_right-options-radio-1-form'>
                  <div className='main_container_second_contact_right-options-radio-1-form-content'>
                    <div>
                      <input type="radio" id="huey" name="Motor Vehicle" value="Motor Vehicle"
                      />
                      <label htmlFor="Motor Vehicle">Motor Vehicle</label>
                    </div>
                    <div>
                      <input type="radio" id="Personal Property" name="Personal Property" value="Personal Property"
                      />
                      <label htmlFor="Personal Property">Personal Property</label>
                    </div>
                    <div>
                      <input type="radio" id="Abatement/Exemptions" name="Abatement/Exemptions" value="Abatement/Exemptions"
                      />
                      <label htmlFor="Abatement/Exemptions">Abatement/Exemptions</label>
                    </div>

                  </div>
                </form>
              </div>

              <div className='main_container_second_contact_right-options-radio-2'>
                <form className='main_container_second_contact_right-options-radio-2-form'>
                  <div className='main_container_second_contact_right-options-radio-2-form-content'>
                    <div>
                      <input type="radio" id="huProperty Inspectioney" name="Property Inspection" value="Property Inspection"
                      />
                      <label htmlFor="Property Inspection">Property Inspection</label>
                    </div>
                    <div>
                      <input type="radio" id="Commercial" name="Commercial" value="Commercial"
                      />
                      <label htmlFor="Commercial">Commercial</label>
                    </div>
                    <div>
                      <input type="radio" id="Other" name="Other" value="Other"
                      />
                      <label htmlFor="Other">Other</label>
                    </div>
                  </div>
                </form>
              </div>


            </div>
            <div className='main_container_second_contact_right-forminfo'>
              <form className='main_container_second_contact_right-forminfo-form'>
                <input type="text"
                  placeholder='Name'
                />
                <input type="email"
                  placeholder='Email'
                />
                <textarea type='text'
                  name='message' placeholder="Message" required className='text-area' />

                <div>
                  <AppButton title="Submit" />
                </div>

              </form>

            </div>

            <div className='main_container_second_contact_right-depart'>
              <div className='main_container_second_contact_right-depart-heading'>
                <Heading title="Assessors Department Contacts" />
              </div>
              <div className='main_container_second_contact_right-depart-maping'>
                {
                  department.map((department, index) =>
                    <Department key={index}
                      title={department.title}
                      address={department.address}
                      phone={department.phone} />
                  )
                }
              </div>
            </div>
          </div>
        </div>

        {/* Left Start ---> Map */}
        <div className='main_container_second_contact_left'>

          <div className='main_container_second_contact_left-first'>
            <Icon />
            <Address />
          </div>

          <div className='main_container_second_contact_left-second'>
            <Map />
          </div>

          <div className='main_container_second_contact_left-third'>
            <div className='main_container_second_contact_left-third-main'>
              <Icon />
              <div className='main_container_second_contact_left-third-heading'>
                <SubHeading heading="Board of Assessors" />
              </div>

            </div>
            <div className='main_container_second_contact_left-third-content'>
              {
                assessors.map((info, index) =>
                  <Assessorinfo
                    key={index}
                    title={info.title}
                    address={info.address}
                    phone={info.phone}
                  />
                )
              }
            </div>


          </div>



        </div>

        {/* Left End */}
      </div>
    </>
  )
}

export default ContactMe