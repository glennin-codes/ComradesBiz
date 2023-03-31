import React, { useState } from 'react'
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
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PhoneInput from "react-phone-number-input/input-mobile";
import "react-phone-number-input/style.css";
import { CircularProgress } from '@mui/material'
import { SendEmail } from '../../Api/Api'


const ContactMe = () => {
  const Wrapper = styled.section`
           button {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }`;

            const[name ,setName]=useState('')
            const[email,setEmail]=useState('')
            const[message,setMessage]=useState('')
            const[phone,setPhone]=useState('')
            const [buttonLoading, setButtonLoading] = useState(false);
            const [send, setSend] = useState();
            const [error, setError] = useState();

            useEffect(()=>{
              if (send) {
                toast.success(send.msg);
                setName("")
                
                setEmail("")
                setPhone("")
                setMessage("")
                setSend()
                
                 
               
              }
              if (error){
                toast.error(error);
                setError();
              }
          },[send,error]);
            



            const onSubmit = (e) => {
              e.preventDefault();
              setButtonLoading(true);
          
              SendEmail({ name ,email,phone, message,setError,setSend }).then(
                () => {
                  setButtonLoading(false);
                }
              );
            };
          
            
  return (
    <>
      <div className='main_container_second_contact'>
        <div className='main_container_second_contact_right'>

          <div className='main_container_second_contact_right-mainHeading'>
            <Heading title="Need to talk to us?" />
            <p> We're happy to help! Send us a message or give us a call at +254713322025</p>
          </div>

          <div className='main_container_second_contact_right-options'>

          <div className='main_container_second_contact_right-options-h6'>
  <h5>Please select the topic you want to talk about:</h5>
</div>

{/* Options */}
<div className='main_container_second_contact_right-options-radio'>
  <div className='main_container_second_contact_right-options-radio-1'>
    <form className='main_container_second_contact_right-options-radio-1-form'>
      <div className='main_container_second_contact_right-options-radio-1-form-content'>
        <div>
          <input type="radio" id="buying" name="topic" value="buying" />
          <label htmlFor="buying">Buying Secondhand Products</label>
        </div>
        <div>
          <input type="radio" id="selling" name="topic" value="selling" />
          <label htmlFor="selling">Selling Secondhand Products</label>
        </div>
        <div>
          <input type="radio" id="accounting" name="topic" value="accounting" />
          <label htmlFor="accounting">Accounting and Financial Questions</label>
        </div>
        <div>
          <input type="radio" id="technical" name="topic" value="technical" />
          <label htmlFor="technical">Technical Issues or Support</label>
        </div>
      </div>
    </form>
  
</div>

              

              <div className='main_container_second_contact_right-options-radio-2'>
  <form className='main_container_second_contact_right-options-radio-2-form'>
    <div className='main_container_second_contact_right-options-radio-2-form-content'>
      <div>
        <input type="radio" id="buying" name="buying" value="Buying" />
        <label htmlFor="buying">I want to buy something</label>
      </div>
      <div>
        <input type="radio" id="selling" name="selling" value="Selling" />
        <label htmlFor="selling">I want to sell something</label>
      </div>
      <div>
        <input type="radio" id="payments" name="payments" value="Payments" />
        <label htmlFor="payments">I have a question about payments</label>
      </div>
      <div>
        <input type="radio" id="account" name="account" value="Account" />
        <label htmlFor="account">I need help with my account</label>
      </div>
      <div>
        <input type="radio" id="other" name="other" value="Other" />
        <label htmlFor="other">Other</label>
      </div>
    </div>
  </form>
</div>



 </div>
            <div className='main_container_second_contact_right-forminfo'>
              <form className='main_container_second_contact_right-forminfo-form' onSubmit={onSubmit
              }>
                <input type="text"
                  placeholder='Name'
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
                <input type="email"
                  placeholder='Email'
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email}
                />
                 <PhoneInput
        placeholder="Enter phone number"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        required
      />
                <textarea type='text'
                  name='message' placeholder="Message" required className='text-area'
                   onchange={(e)=>setMessage(e.target.value)}
                    value={message}
                  />

     <Wrapper>
                <button type='submit'>{buttonLoading ? <CircularProgress size={24} /> : 'Send' }</button>
         </Wrapper>

              </form>

            </div>

            <div className='main_container_second_contact_right-depart'>
              <div className='main_container_second_contact_right-depart-heading'>
                <Heading title="Comradesbiz Departmental" />
              </div>
              <div className='main_container_second_contact_right-depart-maping'>
                {
                  department.map((department, index) =>
                    <Department key={index}
                      title={department.title}
                      name={department.name}
                      email={department.email}
                      phone={department.phone} 

                      />
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
                <SubHeading heading="Board AdvisoryManagement" />
              </div>

            </div>
            <div className='main_container_second_contact_left-third-content'>
              {
                assessors.map((info, index) =>
                  <Assessorinfo
                    key={index}
                    title={info.title}
                    name={info.name}
                    email={info.email}
                    
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