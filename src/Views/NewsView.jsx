import React from 'react';
import Banner from '../Components/Banners/Banner';
import Assets from '../Assets/AssetsFormat/Assets';
import ContactAddress from '../Components/ContactAddress/ContactAddress';
import ContactForm from '../Components/ContactForm/ContactForm';
import RecentNews from '../Components/RecentNews/RecentNews';



function NewsView() {
    return (
        <div className='newspage-main'>
            {/* <div className='banner-main'>
                <Banner image={Assets.AboutBanner} contentOne="Insights, Updates and Events:Stay informed and inspired" />
            </div> */}
            <div className='background-setup'>
                <div className='common-space'>
                <RecentNews />
                </div>
            </div>
                

                {/* <div className='contact-main'>
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
            </div> */}
            </div>

    )
}

export default NewsView
