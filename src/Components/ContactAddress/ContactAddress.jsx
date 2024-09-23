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
                    <a href="tel:+918940952798">+91 8940952798</a>
                </div>
                <div className='row'>
                    <img src={Assets.MailIcon} alt="Mail-icon" />
                    <a href="mailto:contact@example.com">contact@example.com</a>
                </div>
                <div className='row'>
                    <img src={Assets.LocationIcon} alt="Location-icon" />
                    <a href="#" target='_blank'>Company Address</a>
                </div>
            </div>
        </section>
    )
}

export default ContactAddress
