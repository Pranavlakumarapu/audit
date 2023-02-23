
// import React, { useState } from 'react';
// import './Contact.css'

// const Contact = (props) => {
//   const [response, setResponse] = useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     const scriptURL = 'https://script.google.com/macros/s/AKfycbwIFNae2PmbtXH2T8LvB_Ok-mzA_d5aOV1jyAP_KhkxVHPytbx99TgP1HvZkTE5LmC0/exec';
    
//     fetch(scriptURL, {
//       method: 'POST',
//       body: formData
//     })
//       .then(res => {
//         setResponse("Success");
//         console.log('Success!', res);
//       })
//       .catch(error => {
//         setResponse("Error");
//         console.error('Error!', error.message);
//       });
//   };

//   return (
//   <div className='contact_page'>

 
//         <div className=" container-sm shadow border bg-white p-4 rounded">
//           <h2 className="text-center fw-bold mb-3">{props.name}</h2>
//           <form name="google-sheet" onSubmit={handleSubmit}  autoComplete="on" >
//             <div id="form_alerts">
//               {response ? <p>{response}</p> : null}
//             </div>

//             <div className="form-group mb-3">
//               <input
//               autoFocus 
//                 type="name"
//                 id="name"
//                 name="name"
//                 className="form-control"
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>
            

// <div className='contactdropdown'>
// <select name='bussiness' className="form-select" aria-label="your what bussiness or accountant or student or others">
// <option value="Bussiness Owner">Bussiness Owner</option>
//       <option value="Accountant">Accountant</option>  
//       <option value="Student">Student</option>
//       <option value="Others">Others</option>  
// </select>
// </div>
// <br/>
// <div className='contactdropdown'>
// <select name='I am' className="form-select" aria-label="select your retail distribution manufacturing">
// <option selected value="retail">Retail</option>
// <option  value="distribution">Distribution</option>
// <option  value="manufacturing">Manufacturing</option>
// </select>
// </div>
// <br/>
//             <div className="form-group mb-3">
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="form-control"
//                 placeholder="Enter your Email"
//                 required
//               />
//             </div>
//             <div className="form-group mb-3">
//               <input
//                 type="number"
//                 id="phone"
//                 min="0" 
//                 name="phonenumber"
//                 className="form-control"
//                 placeholder="Enter your phone"
//                 pattern="[0-9] {10}"
//                 required
//               />
//             </div>
        
//             <div className="form-group mb-3">
//               <input
//                 type="Address"
//                 id="phonenumber"
//                 name="city"
//                 className="form-control"
//                 placeholder="Enter your City"
//                 required
//               />
//             </div>
//             <div className="form-group mb-3">
//                <input
//                 type="number"
//                 id="pincode"  min="0" 
//                 name="pincode"
//                 className="form-control"
//                 placeholder="Enter your Pincode"
//                 required
//               />
//             </div>
//             <textarea 
//              type="Message"
//              id="message"
//              name="message"
//              className="form-control"
//              placeholder="Write Your Message"
//              required
//             ></textarea>
//             <div className=''>
//              <center> <button className="contactbutton1" type="submit"  id="myform"><span className='messagesend'>Send message</span></button></center>
//             </div>
//           </form>
//         </div>
//       </div>
//   );
// };

// export default Contact;



import React,{useState, useRef } from 'react';
import './Contact.css'

const Contact = (props) => {
  const [height, setHeight] = useState("auto");
  const textareaRef = useRef(null);

  const handleTextareaChange = () => {
    const { scrollHeight } = textareaRef.current;
    setHeight(`${scrollHeight}px`);
  };


  const [response, setResponse] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwIFNae2PmbtXH2T8LvB_Ok-mzA_d5aOV1jyAP_KhkxVHPytbx99TgP1HvZkTE5LmC0/exec';
    
    fetch(scriptURL, {
      method: 'POST',
      body: formData
    })
      .then(res => {
        setResponse("Success");
        console.log('Success!', res);
      })
      .catch(error => {
        setResponse("Error");
        console.error('Error!', error.message);
      });
  };
  return (
 <div className='contact-page contact-container'>
<div className='contact-container'>


<div class="container-fluid">
  <div class="row">
  <div class="col-sm">
      <div className='contact-description'>
        <h6>Auditus-IERP  is considered one of the best software solutions for businesses in various industries offering a range of features  to help manage and streamline business operations</h6>
      </div>
    </div>
    <div class="col-sm">
    <div className='contact-container'>
    <form className='contact-form' name="google-sheet" onSubmit={handleSubmit} >
      <h3 className='contact-title'>{props.name}</h3>

      <input className='form-control contact-inputs' type="text" id='name' name='name' placeholder='Enter Your Name' required/>

      <div className='contactdropdown'>
 <select name='bussiness' className="form-select contact-inputs" aria-label="your what bussiness or accountant or student or others">
 <option value="Bussiness Owner">Bussiness Owner</option>
       <option value="Accountant">Accountant</option>  
       <option value="Student">Student</option>
       <option value="Others">Others</option>  
 </select>
 </div>

      <input className='form-control contact-inputs' type="email" id='email' name='email' placeholder='Enter Your Email' required/>
      <input className='form-control contact-inputs' type="number" id='number' name='phonenumber' placeholder='Enter Your Mobile-Number' required/>
      <input className='form-control contact-inputs' type="text" id='city' name='city' placeholder='Enter Your City' required/>
      <input className='form-control contact-inputs' type="number" id='pincode' name='pincode' placeholder='Enter Your Pincode' required/>
      <textarea ref={textareaRef} style={{ height: height }} onChange={handleTextareaChange} className='form-control contact-textarea' id='message' name='message' placeholder='Write Your Message' ></textarea>

      <button  className='contact-button' type='submit' >Send</button>

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


