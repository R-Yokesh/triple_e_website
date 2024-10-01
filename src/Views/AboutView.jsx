import React from 'react';
import Banner from '../Components/Banners/Banner';
import Assets from '../Assets/AssetsFormat/Assets';
import EthosSection from '../Components/EthosSection/EthosSection';
import VisionSection from '../Components/VisionSection/VisionSection';
import MissionSection from '../Components/MissionSection/MissionSection';
import LeaderShipSection from '../Components/LeaderShipSection/LeaderShipSection';
import ContactAddress from '../Components/ContactAddress/ContactAddress';
import ContactForm from '../Components/ContactForm/ContactForm';
import TeamCard from '../Components/TeamCard/TeamCard';

function AboutView() {

    const TeamContent = [
        {
            id: '1',
            designation: 'CEO',
            name: 'Dr. Nasser Tawfeeq',
            image: Assets.MemberOne,
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
        },
        {
            id: '2',
            designation: 'Head of Technical',
            name: 'Fadi Thaher',
            image: Assets.MemberTwo,
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
        },
        {
            id: '3',
            designation: 'Business Director',
            name: 'Issam Sarrouh',
            image: Assets.MemberThree,
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
        },
        {
            id: '4',
            designation: 'Business Development Manager',
            name: 'Mohammad Al Kahtani',
            image: Assets.MemberFour,
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
        },
        {
            id: '5',
            designation: 'Chief Strategist',
            name: 'Ajay Menon',
            image: Assets.MemberFive,
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
        },
        {
            id: '6',
            designation: 'CMO',
            name: 'Maroun Sarrouh',
            image: Assets.MemberSix,
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
        },
        {
            id: '7',
            designation: 'Chief Architect',
            name: 'Fady Stephan',
            image: Assets.MemberSeven,
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
        },
        {
            id: '8',
            designation: 'Design',
            name: 'Husaina Kutub',
            image: Assets.MemberEight,
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
        },
        {
            id: '9',
            designation: 'Animator & Graphic Designer',
            name: 'Seif Aldeen Abu Ali',
            image: Assets.MemberNine,
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
        },
        {
            id: '10',
            designation: 'CTO',
            name: 'Maroun Karam',
            image: Assets.MemberTen,
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
        },
        // {
        //     id: '11',
        //     designation: 'Client Servicing Manager',
        //     name: 'Lojaun Al Ghorair',
        //     image: Assets.MemberIcon,
        //     content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
        // },
        // {
        //     id: '12',
        //     designation: 'Content Creation',
        //     name: 'Salwa Khaled',
        //     image: Assets.MemberIcon,
        //     content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
        // },
    ]

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
                        <div className='team-main-top-content'>
                            <h1>Team and <span className='team-head-content'>Leadership</span></h1>
                            <h5>At Triple E, our greatest asset is our team – a dynamic group of individuals whose expertise and passion drive our success. Each member brings a unique set of skills, experiences, and perspectives, weaving a rich tapestry of talent at the core of everything we do. Our team’s unwavering dedication and innovative spirit are what set us apart, enabling us to create extraordinary events and unforgettable experiences.</h5>
                        </div>
                        <div className='row'>
                            {TeamContent.map((item, i) => (
                                <div className='col-12 col-sm-4 col-lg-3 mb-5' key={i}>
                                    <TeamCard data={item} />
                                </div>
                            ))}
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
