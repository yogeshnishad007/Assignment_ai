

import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name:"",
    number:""
  });

  const handleForm =(e)=>{
         
    

       setForm({...form,[e.target.name]:e.target.value})

  }

     const handleSubmit = (e) =>{
         e.preventDefault();

         const getData = JSON.parse(localStorage.getItem("contact")) || [];

         const newData = [...getData, form];

         localStorage.setItem("contact",JSON.stringify([newData]))
          
         setForm({name:"",number:""})
     }

  return (
    <>
      <form onSubmit = {handleSubmit}>
        
        <input
           name="name"
           value={form.name}
          type="text"
          onChange={(e) =>handleForm(e)}
        />
  
     
        <input
         name="number"
          value={form.number}
          type="number"
          onChange={(e) => handleForm(e)}
        />
    
    
        <button type="submit">
          Add Contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;






