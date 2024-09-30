import React from 'react'
import Assets from '../../Assets/AssetsFormat/Assets'

function VisionSection() {
    return (
        <section className='row'>
            <div className='vision-img col-12 col-lg-6'>
                <img src={Assets.Vision} alt="vision-image" />
            </div>
            <div className='vision-text col-12 col-lg-6'>
                <h1><span className='vision-clr-change'>Vision of</span> Excellence</h1>
                <h5>Our vision is to be globally acclaimed as pioneers in the events industry, setting new benchmarks and becoming synonymous with extraordinary, trailblazing events. We aim to lead in creativity and technology, continually exploring new horizons and expanding our reach. Committed to continuous improvement, we aspire not just to meet but to redefine industry standards. Our goal is to craft events that inspire, influence, and ignite passion, leaving an indelible mark on the industry and in our clients' hearts.</h5>
                <h5>At Triple E, we are more than event managers; we are creators of unforgettable experiences and architects of dreams.</h5>
            </div>
        </section>
    )
}

export default VisionSection
