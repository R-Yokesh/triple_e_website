import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = ""; // Replace with your actual API endpoint
    const data = new FormData();
    data.append("firstname", formData.firstName);
    data.append("lastname", formData.lastName);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("to", ""); // Receiver's email

    fetch(apiUrl, {
      method: "POST",
      body: data,
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Form submitted successfully:", data);
      toast.success('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
      toast.error('Error submitting form. Please try again.');
    });
  };

  return (
    <section className='contact-form-sec' style={{ paddingRight: 20 }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputEmail4">Name</label>
        <div className="row form-split">
          <div className="col-12 col-sm-6">
            <input 
              type="text" 
              className="form-control" 
              placeholder="FIRST" 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="col-12 col-sm-6">
            <input 
              type="text" 
              className="form-control" 
              placeholder="LAST" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required 
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="inputAddress" 
            placeholder="EMAIL" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea 
            className="form-control" 
            placeholder='TYPE YOUR MESSAGE HERE' 
            id="exampleFormControlTextarea1" 
            rows="7" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className='form-button'>
          <button type="submit">Send</button>
        </div>
      </form>
      <ToastContainer 
        position="top-right"   
        autoClose={5000}      
        hideProgressBar={false} 
        newestOnTop={false}
        closeOnClick
        rtl={false}           
        pauseOn FocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
}

export default ContactForm;