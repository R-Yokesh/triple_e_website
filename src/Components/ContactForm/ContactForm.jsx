import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

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

        // Send form data to EmailJS
        emailjs.sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,  
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
          e.target,
          process.env.REACT_APP_EMAILJS_USER_ID
        ).then((result) => {
            console.log('Email sent successfully:', result.text);
            toast.success('Email sent successfully!'); 
        }).catch((error) => {
            console.error('Error in sending email:', error.text);
            toast.error('Error in sending email. Please try again.'); 
        });

        // Reset form after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    };

    return (
        <section className='contact-form-sec'>
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
            {/* Toast container to display notifications */}
            <ToastContainer 
                position="top-right"  // Ensures the toast appears on the top-right
                autoClose={5000}      // Closes the toast after 5 seconds
                hideProgressBar={false} 
                newestOnTop={false}
                closeOnClick
                rtl={false}           // Set to `true` for right-to-left layouts, `false` for left-to-right
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </section>
    );
}

export default ContactForm;
