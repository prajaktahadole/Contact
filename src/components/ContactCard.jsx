import React, { useState } from "react";
import './ContactCard.css';
import trashIcon from "../../trash-icon.png";


const ContactCard = ({id, name, email, phone, onDelete}) =>{

  const [isActive, setIsActive] = useState(false);

  if(isActive){
    return (
      <div onClick={() => setIsActive(false)}>
        {isActive && <div className="ActiveDiv">
          <div>Name : {name}</div>
          <div>Contact Number :{phone}</div>
          <div>Email id : {email}</div>
          </div>}
      </div>
    )
  }

  return (
    <div id="Contact-main">
    
  
  <div onClick={() => setIsActive(!isActive) } className="mobileBox">
  <div> {name} </div>
  <div> { email } </div>

  </div>

  <button onClick={() => onDelete(id)}>
    <img src={trashIcon} className="delete-icon" alt="delete-task"></img>
  </button>
    </div>
  );
  
};  


export default ContactCard;
 