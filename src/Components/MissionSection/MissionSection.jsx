import React, { useState } from 'react'
import Assets from '../../Assets/AssetsFormat/Assets'
import Accordion from 'react-bootstrap/Accordion';

function MissionSection() {
    const [ActiveSection, setActiveSection] = useState(0)
    console.log('key', ActiveSection)
    const AccordData = [
        {
            head: 'Deliver Captivating Visual Appeal',
            content: `When it comes to exhibitions, first impressions matter. your stand's visual appeal is the first thing that catches the eye of attendees. We wanted to create a captivating, and visually stunning exhibition stands that capture the essence of your brand and attract the right audience.`,
        },
        {
            head: 'Deliver Captivating Visual Appeal',
            content: `When it comes to exhibitions, first impressions matter. your stand's visual appeal is the first thing that catches the eye of attendees. We wanted to create a captivating, and visually stunning exhibition stands that capture the essence of your brand and attract the right audience.`,
        },
        {
            head: 'Deliver Captivating Visual Appeal',
            content: `When it comes to exhibitions, first impressions matter. your stand's visual appeal is the first thing that catches the eye of attendees. We wanted to create a captivating, and visually stunning exhibition stands that capture the essence of your brand and attract the right audience.`,
        },
        {
            head: 'Deliver Captivating Visual Appeal',
            content: `When it comes to exhibitions, first impressions matter. your stand's visual appeal is the first thing that catches the eye of attendees. We wanted to create a captivating, and visually stunning exhibition stands that capture the essence of your brand and attract the right audience.`,
        },
        {
            head: 'Deliver Captivating Visual Appeal',
            content: `When it comes to exhibitions, first impressions matter. your stand's visual appeal is the first thing that catches the eye of attendees. We wanted to create a captivating, and visually stunning exhibition stands that capture the essence of your brand and attract the right audience.`,
        },
    ]
    return (
        <section className='row'>
            <div className='mission-content col-12 col-lg-6 pr-lg-0'>
                <div className='common-space'>
                    <h1 className='mission-head-text'>Comprehensive event solutions, tailored to your vision</h1>
                </div>
                <Accordion defaultActiveKey={ActiveSection} onSelect={(key) => setActiveSection(key)}>
                    {AccordData.map((item, i) => (
                        <Accordion.Item eventKey={i} className={ActiveSection == i ? 'bg-accord' : ''}>
                            <div className='common-space'>
                                <div className='accord-space'>
                                    <Accordion.Header><p className={ActiveSection == i ? 'accord-head' : 'accord-white'}>{item.head} <img src={ActiveSection == i ? Assets.MinusIcon : Assets.DropdownIcon} alt="" className='icon-img' /></p></Accordion.Header>
                                    <Accordion.Body>
                                        <p className='accord-body'>{item.content}</p>
                                    </Accordion.Body>
                                </div>
                            </div>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
            <div className='mission-image col-12 col-lg-6 pl-lg-0'>
                <img src={Assets.Vision} alt="Mission-image" />
            </div>
        </section >
    )
}

export default MissionSection
