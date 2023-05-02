import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./socialFlow.css";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
// import {
//   faFacebook,
//   faTwitter,
//   faWhatsapp,
//   faInstagram
// } from "@fortawesome/free-brands-svg-icons";

export default function SocialFlow({infos}) {
  const {phone,name,price,image}=infos

const message = `Hi, I'm interested in your ${name} product that is priced at ${price}. Can you provide me with more information?<br><img src="${image[0]?.url}" alt="${name}">`;

const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

  return (
    <nav>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100091573156387"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FontAwesomeIcon icon={FaFacebook} className="icon" />
            </i>
          
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/@comradesbiz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FontAwesomeIcon icon={FaTwitter} className="icon" />
            </i>
            
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/comradesbiz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FontAwesomeIcon icon={FaInstagram} className="icon" />
            </i>
            
          </a>
        </li>
        <li>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FontAwesomeIcon icon={FaWhatsapp} className="icon" />
            </i>
            
          </a>
        </li>
      </ul>
    </nav>
  );
}