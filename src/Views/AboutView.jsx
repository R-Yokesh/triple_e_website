import React from 'react';
import Banner from '../Components/Banners/Banner';
import Assets from '../Assets/AssetsFormat/Assets';
import EthosSection from '../Components/EthosSection/EthosSection';

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
            </div>
        </div>
    )
}

export default AboutView
