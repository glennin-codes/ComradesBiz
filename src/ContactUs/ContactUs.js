import Header from "../ContactPage/Component/Header/Header"
import ContactMe from "../ContactPage/Container/Contact/ContactMe"
import Department from "../ContactPage/Container/Department/Department";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './ContactUs.css';
import FooterContact from "../ContactPage/Component/Footer/Footer";
const contact =()=>{

    return(
        <>
           {/* <Top /> */}
    <Header /> 
    <ContactMe />
    <Department />
    {/* <FooterContact /> */}

        </>
    )
}
export default contact;













// import styled from "styled-components";

// const Contact = () => {
 

//   const Wrapper = styled.section`
//     padding: 9rem 0 5rem 0;
//     text-align: center;

//     .container {
//       margin-top: 6rem;

//       .contact-form {
//         max-width: 50rem;
//         margin: auto;

//         .contact-inputs {
//           display: flex;
//           flex-direction: column;
//           gap: 3rem;

//           input[type="submit"] {
//             cursor: pointer;
//             transition: all 0.2s;

//             &:hover {
//               background-color: ${({ theme }) => theme.colors.white};
//               border: 1px solid ${({ theme }) => theme.colors.btn};
//               color: ${({ theme }) => theme.colors.btn};
//               transform: scale(0.9);
//             }
//           }
//         }
//       }
//     }
//   `;

//   return (
//     <Wrapper>
//       <h2 className="common-heading">Contact page</h2>

//       <iframe
//         // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.9774605186335!2d77.29678141435814!3d28.299006905849843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc0b01f0f019%3A0x93e4211b9a200ed0!2sAlchem%20International%20Private%20Limited!5e0!3m2!1sen!2sin!4v1664815246439!5m2!1sen!2sin"
//       src= 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.9774605186335!2d77.29678141435814!3d28.299006905849843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s-0.5659272502120657%2C37.32018609457084!5e0!3m2!1sen!2sin!4v1664815246439!5m2!1sen!2sin'
//         width="100%"
//         height="400"

//         style={{ border: 0,borderRadius:'15px',marginLeft:'20px',marginRight:'20px' }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"></iframe>

//       <div className="container">
//         <div className="contact-form">
//           <form
           
//             className="contact-inputs">
//             <input
//               type="text"
//               placeholder="name"
//               name="name"
//               value=''
//               required
//               autoComplete="off"
//             />

//             <input
//               type="email"
//               name="Email"
//               placeholder="Email"
//               autoComplete="off"
//               value=''
//               required
//             />

//             <textarea
//               name="Message"
//               cols="30"
//               rows="10"
//               required
//               autoComplete="off"
//               placeholder="Enter you message"></textarea>

//             <input type="submit" value="send" />
//           </form>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Contact;