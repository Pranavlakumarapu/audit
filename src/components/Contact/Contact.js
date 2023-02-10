
import React, { useState } from 'react';
import './Contact.css'

const Contact = (props) => {
  const [response, setResponse] = useState(null);
/* jj */
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
  <div className='contact_page'>

 
        <div className="shadow border bg-white p-4 rounded">
          <h2 className="text-center fw-bold mb-3">{props.name}</h2>
          <form name="google-sheet" onSubmit={handleSubmit} >
            <div id="form_alerts">
              {response ? <p>{response}</p> : null}
            </div>

            <div className="form-group mb-3">
              <input
              autoFocus 
                type="name"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>
            

<div className='contactdropdown'>
<select name='bussiness' className="form-select" aria-label="your what bussiness or accountant or student or others">
<option value="Bussiness Owner">Bussiness Owner</option>
      <option value="Accountant">Accountant</option>  
      <option value="Student">Student</option>
      <option value="Others">Others</option>  
</select>
</div>
<br/>
<div className='contactdropdown'>
<select name='I am' className="form-select" aria-label="select your retail distribution manufacturing">
<option selected value="retail">Retail</option>
<option  value="distribution">Distribution</option>
<option  value="manufacturing">Manufacturing</option>
</select>
</div>
<br/>
            <div className="form-group mb-3">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="number"
                id="phone"
                min="0" 
                name="phonenumber"
                className="form-control"
                placeholder="Enter your phone"
                pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                required
              />
            </div>
        
            <div className="form-group mb-3">
              <input
                type="Address"
                id="phonenumber"
                name="city"
                className="form-control"
                placeholder="Enter your City"
                required
              />
            </div>
            <div className="form-group mb-3">
               <input
                type="number"
                id="pincode"  min="0" 
                name="pincode"
                className="form-control"
                placeholder="Enter your Pincode"
                required
              />
            </div>
            <textarea 
             type="Message"
             id="message"
             name="message"
             className="form-control"
             placeholder="Write Your Message"
             required
            ></textarea>
            <div className=''>
             <center> <button className="contactbutton1" type="submit" id="myform"><span className='messagesend'>Send message</span></button></center>
              {/* <button className="btn btn-danger" type="reset">Reset the form!</button> */}
            </div>
          </form>
        </div>
      </div>



  );
};

export default Contact;