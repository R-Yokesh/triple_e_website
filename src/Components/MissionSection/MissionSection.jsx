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
            head: 'Enable brand identity and messaging',
            content: `We give your brand a powerful voice and look that instantly connects with your audience. We help you create a unique identity and clear, impactful messaging that stands out in the market. From logos to taglines, we make sure your brand's story is heard and remembered.`,
        },
        {
            head: 'Deliver interactive experiences',
            content: `We create dynamic, engaging moments that captivate and involve your audience. We design immersive experiences that go beyond passive viewing, encouraging participation and connection with your brand. Whether through events, digital platforms, or live activations, we ensure every interaction leaves a lasting impression.`,
        },
        {
            head: 'Exhibit thoughtful space planning',
            content: `We design environments that are not only visually appealing but also functional and seamless. We carefully plan every detail to optimize flow, enhance comfort, and create memorable experiences for your guests. From layout to décor, we ensure that every space serves its purpose while reflecting your brand’s identity.`,
        },
        {
            head: 'Provide engaging staff',
            content: `We offer a team that is not only professional but also friendly, approachable, and skilled at enhancing guest interactions. Our staff members are trained to engage with attendees, ensuring a warm, welcoming atmosphere while seamlessly managing event details. Their positive energy and dedication leave a lasting impression, making your event both smooth and memorable.`,
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
