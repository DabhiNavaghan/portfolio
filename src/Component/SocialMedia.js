import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp , 
} from "react-icons/fa"; 

export const Socialicons = (params) => {

    const socialprofils = {
        github: "https://github.com/DabhiNavaghan",
        mail: "mailto:dabhinavaghan6@gmail.com",
        whatsapp: "whatsapp://send?text=hello \ni go through your website \n&phone=919510916899",
        github1: "https://github.com/navaghandabhi",
        facebook: "https://facebook.com",
        linkedin: "https://www.linkedin.com/in/dabhi-navaghan-5091031b2/",
        twitter: "https://twitter.com/NavaghanHere?t=eVqoxAfpvxirtiX9_gEycA&s=09",
    };
  return (
    <div className="stick_follow_icon">
     <div className="icons">
     <ul>

    
 
        <Icon URL={socialprofils.twitter} icon={ <FaTwitter  />}></Icon>
        <Icon URL={socialprofils.github} icon={ <FaGithub  />}></Icon>
        <Icon URL={socialprofils.github1} icon={ <FaGithub  />}></Icon>
        <Icon URL={socialprofils.linkedin} icon={ <FaLinkedin  />}></Icon>
        <Icon URL={socialprofils.mail} icon={ <FaEnvelope  />}></Icon>
        <Icon URL={socialprofils.whatsapp} icon={ <FaWhatsapp  />}></Icon>
      </ul>
     </div>
      <p>Get in touch</p>
    </div>
  );
};

const Icon = ({ URL, icon }) => {
    return URL && ( // Condition to render the icon only if URL is provided
      <li>
        <a href={URL}>
        <span className={"icon"}>{icon}</span>
        </a>
      </li>
    );
  };