import React from 'react';
import { useState } from 'react';
import './ContactCard.css';

 const AddContact = (props) =>{
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () =>{
    if (props.handleClick) props.handleClick(text, phone, email );
     setText("");
     setPhone("");
     setEmail("");
  };

  return (
    <div>
      <div id='main-addContact'>
     <div>
     <input 
     className='inputbox'
      value={text} 
      onChange={(e) => setText(e.target.value)}  
      placeholder="Name">
      </input>
     </div>

     <div>
     <input 
      className='inputbox'
      value={phone} 
      onChange={(e) => setPhone(e.target.value)}
      placeholder="Phone Number">
      </input>
     </div>
      
     <div>
     <input 
      className='inputbox'
      value={email} 
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