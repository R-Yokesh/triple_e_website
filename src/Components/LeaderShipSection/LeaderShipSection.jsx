import React from 'react'
import Assets from '../../Assets/AssetsFormat/Assets'

function LeaderShipSection() {
    return (
        <section className='row'>
            <div className='col-12 col-sm-7 col-lg-5 leader-text'>
                <h1><span className='leader-orange'>Leadership</span> <br /> That Inspires</h1>
                <h5>At Triple E, our leadership team embodies the core values of innovation, excellence, and collaboration. Our leaders are not only visionary strategists but also dedicated mentors who cultivate talent and inspire a culture of creativity and growth. They steer our organization with a passion for excellence, ensuring that every project reflects our commitment to pushing boundaries and achieving greatness.</h5>
            </div>
            <div className='col-12 col-sm-5 col-lg-7 leader-img'>
                <img src={Assets.LeaderLogo} alt="logo-sec" />
            </div>
        </section>
    )
}

export default LeaderShipSection
