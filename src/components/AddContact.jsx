import React from 'react';
import { useState } from 'react';
import './ContactCard.css';
//import trashIcon from "./trash-icon.png";

 const AddContact = (props) =>{
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () =>{
    if (props.handleClick) props.handleClick(text, email );
     setText("");
     setEmail("");
  };

  return (
    <div>
      <div id='main-addContact'>
     <div>
     <input 
      value={text} 
      onChange={(e) => setText(e.target.value)}  
      placeholder="Name">
      </input>
     </div>
      
     <div>
     <input value={email} 
      onChange={(e) => setEmail(e.target.value)}
       placeholder="Email Id">
      </input>
     </div>

     <div>
     <button onClick={handleClick}>ADD</button>
     </div>
      </div>
    </div>
  )
}
 
export default AddContact;