import React, { useState } from 'react'
import Assets from '../../Assets/AssetsFormat/Assets'

function TeamCard({ data }) {

    const [contentSetup, setContentSetup] = useState(false);

    console.log('false-state', contentSetup)

    return (
        <section className={contentSetup ? 'team-card-sec team-card-sec-bg' : 'team-card-sec'}>
            <img src={data.image} alt="Team-image" className='team-image' />
            {!contentSetup &&
                <div className='team-member-content'>
                    <div className='row team-content-justify'>
                        <div className='content-left-side'>
                            <p className='member-designation'>{data.designation}</p>
                            <p className='member-name'>{data.name}</p>
                        </div>
                        {/* <div className='content-right-side'>
                            <img src={Assets.BlackDots} alt="dot-icon" onClick={() => (setContentSetup(!contentSetup))} />
                            <img src={Assets.LinkedInIcon} alt="linedin-icons" />
                        </div> */}
                    </div>
                </div>
            }
            {/* {contentSetup &&
                <div>
                    <div className='hidden-content common-overlay-sec'>
                        <div className='team-data-sec'>
                            <p>{data.designation}</p>
                            <p>{data.name}</p>
                        </div>
                        <p className='team-data-text'>{data.content}</p>
                        <div className='content-right-side hide-linked-img'>
                            <img src={Assets.WhiteDots} alt="dot-icon" onClick={() => (setContentSetup(!contentSetup))} />
                            <img src={Assets.LinkedInIcon} alt="linedin-icons" />
                        </div>
                    </div>
                    <div className='team-overlay common-overlay-sec'></div>
                </div>
            } */}
        </section>
    )
}

export default TeamCard
