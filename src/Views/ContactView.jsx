import React from 'react';
import Banner from '../Components/Banners/Banner';
import Assets from '../Assets/AssetsFormat/Assets';
import ContactAddress from '../Components/ContactAddress/ContactAddress';
import ContactForm from '../Components/ContactForm/ContactForm';


function ContactView() {
    return (
        <div className='contactpage-main'>
            <div className='banner-main'>
                <Banner image={Assets.AboutBanner} contentOne="" />
            </div>
            <div className='background-setup'>
                <div className='common-space'>
                    <div className='contact-main'>
                <div className='common-space'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-lg-5'>
                            <ContactAddress />
                        </div>
                        <div className='col-12 col-sm-12 col-lg-7'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
            </div>
            
        )
    }

export default ContactView