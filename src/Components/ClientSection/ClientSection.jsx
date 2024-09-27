import React from 'react';
import Assets from '../../Assets/AssetsFormat/Assets';

function ClientSection() {
    const ClientImage = [Assets.ClientOne, Assets.ClientTwo, Assets.ClientThree, Assets.ClientFour, Assets.ClientFive, Assets.ClientSix]
    return (
        <section className='strategic-client-sec'>
            <div className='row'>
                {ClientImage.map((item, i) => (
                    <div className='strategic-client-logo col-6 col-sm-4 col-lg-3'>
                        <img src={item} alt="client-logo" key={i} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ClientSection
