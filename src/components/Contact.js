
import React, { useState } from 'react';
import './Contact.css'

const Contact = () => {
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
  <div>
     <div className='contactbox'>
     <div className="container  py-5 ">
      <div className="row">
        <div className="col-lg-5 col-md-8 mx-auto shadow border bg-white p-4 rounded">
          <h2 className="text-center fw-bold mb-3">Contact Us</h2>
          <form name="google-sheet" onSubmit={handleSubmit}>
            <div id="form_alerts">
              {response ? <p>{response}</p> : null}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="Name" className="form-label">Name</label>
              <input
                type="name"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="dropdownbussiness"> 
   <div className="select">
   <select name='I am'>
   <option selected>I am *</option>
      <option value="Bussiness Owner">Bussiness Owner</option>
      <option value="Accountant">Accountant</option>  
      <option value="Student">Student</option>
      <option value="Others">Others</option>  
         </select>
   </div>
   </div>

            <center>
   <div className="dropdownbussiness"> 
   <div className="select">
   <select name='bussiness'>
    <option  value="retail">Retail</option>
    <option  value="distribution">Distribution</option>
    <option  value="manufacturing">Manufacturing</option>
         </select>
   </div>
   </div>
   </center>
            <div className="form-group mb-3">
              <label htmlFor="Email" className="form-label">Email</label>
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
              <label htmlFor="Phone" className="form-label">PhoneNumber</label>
              <input
                type="tel"
                id="phone"
                name="phonenumber"
                className="form-control"
                placeholder="Enter your phone"
                pattern="[0-9]{10}"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="Phone" className="form-label">Pincod</label>
              <input
                type="tel"
                id="phone"
                name="pincode"
                className="form-control"
                placeholder="Enter your phone"
                pattern="[0-9]{10}"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="Address" className="form-label">City</label>
              <input
                type="Address"
                id="phonenumber"
                name="city"
                className="form-control"
                placeholder="Enter your City"
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
              <button className="contactbutton1" type="submit" id="myform"><span className='messagesend'>Send message</span></button>
              <button className="btn btn-danger" type="reset">Reset the form!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
     </div>
  </div>
  );
};

export default Contact;