// import React,{useState, useRef } from 'react';
// import './Contact.css'

// const Contact = (props) => {
//   const [height, setHeight] = useState("auto");
//   const textareaRef = useRef(null);

//   const handleTextareaChange = () => {
//     const { scrollHeight } = textareaRef.current;
//     setHeight(`${scrollHeight}px`);
//   };


//   const [response, setResponse] = useState(null);

//   const handleSubmit = (event) => {
//     const formData = new FormData(event.target);
//     const scriptURL = 'https://script.google.com/macros/s/AKfycbwIFNae2PmbtXH2T8LvB_Ok-mzA_d5aOV1jyAP_KhkxVHPytbx99TgP1HvZkTE5LmC0/exec';
      
//     fetch(scriptURL, {
//       method: 'POST',
//       body: formData
//     })
//       .then(res => {
//         setResponse("Success");
//         console.log('Success!', res);
//         setTimeout(() => {
//           event.target.reset();
//         }, 100);
//       })
//       .catch(error => {
//         setResponse("Error");
//         console.error('Error!', error.message);
//       });
//     };


//   return (
//  <div className='contact-page contact-container'>
// <div className='contact-container'>


// <div className="container-fluid">
//   <div className="row">
//   <div className="col-sm">
//       <div className='contact-description'>
//       <h3 className='contact-title'>{props.name}</h3>
//         <h6>Auditus-IERP  is considered one of the best software solutions for businesses in various industries offering a range of features  to help manage and streamline business operations</h6>
//       </div>
//     </div>
//     <div className="col-sm">
//     <div className='contact-container'>
//     <form className='contact-form' name="google-sheet" onSubmit={handleSubmit} >
     

//       <input className='form-control contact-inputs' type="text" id='name' name='name' placeholder='Enter Your Name' required/>

//       <div className='contactdropdown'>
//  <select name='bussiness' className="form-select contact-inputss" aria-label="your what bussiness or accountant or student or others">
//  <option value="Retail">Retail Bussiness</option>
//        <option value="Distribution"> Distribution Bussiness</option>  
//        <option value="Manufacturing">Manufacturing Bussiness</option>
//  </select>
//  </div>

//  <div className='contactdropdown'>
//  <select name='I am' className="form-select contact-inputss" aria-label="your what bussiness or accountant or student or others">
//  <option value="Bussiness Owner"> I am  Bussiness Owner</option>
//        <option value="Accountant">I am  Accountant</option>  
//        <option value="Student">   I am  Student</option>
//        <option value="Others">    I am  Others</option>  
//  </select>
//  </div>

//       <input className='form-control contact-inputs' type="email" id='email' name='email' placeholder='Enter Your Email' required/>
//       <input className='form-control contact-inputs' type="tel" id='number' name='phonenumber' placeholder='Enter Your Mobile-Number' pattern="[0-9]{10}" required/>
//       <input className='form-control contact-inputs' type="text" id='city' name='city' placeholder='Enter Your City' required/>
//       <input className='form-control contact-inputs' type="number" id='pincode' name='pincode' placeholder='Enter Your Pincode' required/>
//       <textarea ref={textareaRef} style={{ height: height }} onChange={handleTextareaChange} className='form-control contact-textarea' id='message' name='message' placeholder='Write Your Message' ></textarea>

//       <button  className='contact-button' type='submit' >Send</button>

//     </form>
//   </div>
//     </div>

//   </div>
// </div>


// </div>

//  </div>
//   );
// };

// export default Contact;








import React, { useState, useRef } from 'react';
import './Contact.css';

const Contact = (props) => {
  const [height, setHeight] = useState("auto");
  const textareaRef = useRef(null);

  const handleTextareaChange = () => {
    const { scrollHeight } = textareaRef.current;
    setHeight(`${scrollHeight}px`);
  };

  const [response, setResponse] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission behavior
    const formData = new FormData(event.target);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwIFNae2PmbtXH2T8LvB_Ok-mzA_d5aOV1jyAP_KhkxVHPytbx99TgP1HvZkTE5LmC0/exec';
      
    fetch(scriptURL, {
      method: 'POST',
      body: formData
    })
      .then(res => {
        setResponse("Success");
        console.log('Success!', res);
        setTimeout(() => {
          event.target.reset();
        }, 100);
      })
      .catch(error => {
        setResponse("Error");
        console.error('Error!', error.message);
      });
  };


  return (
 <div className='contact-page contact-container'>
<div className='contact-container'>


<div className="container-fluid">
  <div className="row">
  <div className="col-sm">
      <div className='contact-description'>
      <h3 className='contact-title'>{props.name}</h3>
        <h6>Auditus-IERP  is considered one of the best software solutions for businesses in various industries offering a range of features  to help manage and streamline business operations</h6>
      </div>
    </div>
    <div className="col-sm">
    <div className='contact-container'>
    <form className='contact-form' name="google-sheet" onSubmit={handleSubmit}>

     

      <input className='form-control contact-inputs' type="text" id='name' name='name' placeholder='Enter Your Name' required/>

      <div className='contactdropdown'>
 <select name='bussiness' className="form-select contact-inputss" aria-label="your what bussiness or accountant or student or others">
 <option value="Retail">Retail Bussiness</option>
       <option value="Distribution"> Distribution Bussiness</option>  
       <option value="Manufacturing">Manufacturing Bussiness</option>
 </select>
 </div>

 <div className='contactdropdown'>
 <select name='I am' className="form-select contact-inputss" aria-label="your what bussiness or accountant or student or others">
 <option value="Bussiness Owner"> I am  Bussiness Owner</option>
       <option value="Accountant">I am  Accountant</option>  
       <option value="Student">   I am  Student</option>
       <option value="Others">    I am  Others</option>  
 </select>
 </div>

      <input className='form-control contact-inputs' type="email" id='email' name='email' placeholder='Enter Your Email' required/>
      <input className='form-control contact-inputs' type="tel" id='number' name='phonenumber' placeholder='Enter Your Mobile-Number' pattern="[0-9]{10}" required/>
      <input className='form-control contact-inputs' type="text" id='city' name='city' placeholder='Enter Your City' required/>       <input className='form-control contact-inputs' type="number" id='pincode' name='pincode' placeholder='Enter Your Pincode' required/>

      <textarea ref={textareaRef} style={{ height: height }} onChange={handleTextareaChange} className='form-control contact-textarea' id='message' name='message' placeholder='Write Your Message' ></textarea>

      <center><button  className='contact-button' type='submit' >Send</button></center>

    </form>
  </div>
    </div>

  </div>
</div>


</div>

 </div>
  );
};

export default Contact;


