import React from 'react';
import Banner from '../Components/Banners/Banner';
import Assets from '../Assets/AssetsFormat/Assets';
import EthosSection from '../Components/EthosSection/EthosSection';
import VisionSection from '../Components/VisionSection/VisionSection';
import MissionSection from '../Components/MissionSection/MissionSection';
import LeaderShipSection from '../Components/LeaderShipSection/LeaderShipSection';
import ContactAddress from '../Components/ContactAddress/ContactAddress';
import ContactForm from '../Components/ContactForm/ContactForm';

function AboutView() {
    return (
        <div className='aboutpage-main'>
            <div className='banner-main'>
                <Banner image={Assets.AboutBanner} contentOne="Welcome to Triple E, where every event is a masterpiece in the making." />
            </div>
            <div className='background-setup'>
                <div className='ethos-main'>
                    <div className='common-space'>
                        <EthosSection />
                    </div>
                </div>
                <div className='vision-main'>
                    <div className='common-space'>
                        <VisionSection />
                    </div>
                </div>
                <div className='mission-main'>
                    <MissionSection />
                </div>
                <div className='team-main'>
                    <div className='common-space'>
                        <div className='row'>
                            <div className='col-12 col-sm-6 col-lg-3'>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='leadership-main'>
                    <div className='common-space'>
                        <LeaderShipSection />
                    </div>
                </div>
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
    )
}

export default AboutView
