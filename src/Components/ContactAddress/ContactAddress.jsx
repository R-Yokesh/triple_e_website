import React from 'react'
import Assets from '../../Assets/AssetsFormat/Assets'

function ContactAddress() {
    return (
        <section className='contact-address'>
            <div className='contact-content'>
                <h1>LET’S START <br /> SOMETHING <br /> GREAT TOGETHER</h1>
                <h5>For tailored event solutions and expert guideance, reach out to us today.</h5>
            </div>
            <div className='contact-links'>
                <div className='row'>
                    <img src={Assets.CallIcon} alt="Call-icon" />
                    <p className='contact-styling'>+966581677070</p>
                    <p className='contact-styling'>+966501007811</p>
                </div>
                {/* <div className='row'>
                    <img src={Assets.MailIcon} alt="Mail-icon" />
                    <a href="mailto:contact@example.com">contact@example.com</a>
                </div> */}
                <div className='row'>
                    <img src={Assets.LocationIcon} alt="Location-icon" />
                    <p className='contact-styling'>No:9, 1st floor, AI Ghadeer Center <br /> King Abdulaziz Road <br />Riyadh</p>
                </div>
            </div>
        </section>
    )
}

export default ContactAddress
