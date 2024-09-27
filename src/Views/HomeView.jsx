import React from 'react';
import Banner from '../Components/Banners/Banner';
import Assets from '../Assets/AssetsFormat/Assets';
import Card from '../Components/Card/Card';
import ContactAddress from '../Components/ContactAddress/ContactAddress';
import ContactForm from '../Components/ContactForm/ContactForm';
import AboutSection from '../Components/AboutSection/AboutSection';
import CountSection from '../Components/CountSection/CountSection';
import Speciality from '../Components/Speciality/Speciality';
import ClientSlide from '../Components/ClientSlide/ClientSlide';
import TreeSection from '../Components/TreeSection/TreeSection';
import AffiliationSection from '../Components/AffiliationSection/AffiliationSection';
import ClientSection from '../Components/ClientSection/ClientSection';
import WorkCard from '../Components/WorkCard/WorkCard';

function HomeView() {

    const CardContent = [
        {
            head: 'Evoke',
            content: 'We seek to stimulate minds and motivate effective actions that resonate, and last',
            img: Assets.CardOne
        },
        {
            head: 'Engage',
            content: 'It’s the journey that counts. We craft enticing experiences that are uniquely fulfilling.',
            img: Assets.CardTwo
        },
        {
            head: 'Elevate',
            content: 'We challenge ourselves continuously to breakthrough limits and deliver outstanding results every time, all the time.',
            img: Assets.CardThree
        }

    ]

    const CountContent = [
        {
            count: '125+',
            name: 'Collective Experience',
            clr: 'orange-text'
        },
        {
            count: '30+',
            name: 'Industries Served',
            clr: 'light-green-text'
        },
        {
            count: '7+',
            name: 'Strategic Partners',
            clr: 'green-text'
        },
        {
            count: '9+',
            name: 'Regions in KSA',
            clr: 'blue-text'
        },
        {
            count: '150+',
            name: 'Activations',
            clr: 'orange-text'
        },
        {
            count: '150+',
            name: 'Ongoing Clients',
            clr: 'green-text'
        }
    ]

    const SpecialityContent = [
        {
            head: 'Your Go-To for Comprehensive',
            clrHead: 'Event Services',
            content: 'At Triple E, we specialize in delivering a vast array of event services, each designed to meet your needs with creativity and precision. Our extensive expertise guarantees that every event is executed seamlessly, reflecting the highest standards of excellence.',
            image: Assets.rightSpeciality
        },
        {
            head: 'Equipment',
            clrHead: 'Our',
            content: `Our vision is to be globally acclaimed as pioneers in the events industry, setting new benchmarks and becoming synonymous with extraordinary, trailblazing events. We aim to lead in creativity and technology, continually exploring new horizons and expanding our reach. Committed to continuous improvement, we aspire not just to meet but to redefine industry standards. Our goal is to craft events that inspire, influence, and ignite passion, leaving an indelible mark on the industry and in our clients' hearts.`,
            contentTwo: 'At Triple E, we are more than event managers; we are creators of unforgettable experiences and architects of dreams.',
            image: Assets.leftSpeciality,
            reverse: true
        }

    ]

    const TreeContent = [
        {
            head: 'Unmatched Partnerships:',
            content: 'Our success is rooted in forging strong, enduring relationships. These partnerships are the cornerstone of our comprehensive and dynamic event solutions, ensuring every collaboration is a triumph.',
            pose: 'top-left'
        },
        {
            head: 'Pioneering Innovation:',
            content: 'At Afkar Hub, we revolutionize event management by blending boundless creativity with the latest technological advancements. We don’t just follow trends; we set them.',
            pose: 'top-right'
        },
        {
            head: 'Versatile Expertise:',
            content: 'Our extensive portfolio showcases our ability to manage a diverse array of events. This adaptability reflects our broad skill set and our knack for turning any vision into reality.',
            pose: 'center-left'
        },
        {
            head: 'Technological Vanguard:',
            content: 'We are at the forefront of incorporating cutting-edge technology into events. Our leadership in this arena ensures each event we produce is unique, interactive, and unforgettable.',
            pose: 'center-right'
        },
        {
            head: 'Unwavering Quality:',
            content: 'From day one, our commitment to quality and client satisfaction has propelled us to set new industry standards. Excellence isn’t just a goal; it’s our foundation.',
            pose: 'bottom-center'
        },
    ]

    const OurWorkContent = [
        {
            id: 1,
            image: Assets.leftSpeciality,
            head: 'Unwavering Quality:',
            content: `From day one, our commitment to quality and client satisfaction has propelled us to set new industry standards. Excellence isn’t just a goal; it’s our foundation.`,
            link: ''
        },
        {
            id: 2,
            image: Assets.leftSpeciality,
            head: 'Unwavering Quality:',
            content: `From day one, our commitment to quality and client satisfaction has propelled us to set new industry standards. Excellence isn’t just a goal; it’s our foundation.`,
            link: ''
        },
        {
            id: 3,
            image: Assets.leftSpeciality,
            head: 'Unwavering Quality:',
            content: `From day one, our commitment to quality and client satisfaction has propelled us to set new industry standards. Excellence isn’t just a goal; it’s our foundation.`,
            link: ''
        },
        {
            id: 4,
            image: Assets.leftSpeciality,
            head: 'Unwavering Quality:',
            content: `From day one, our commitment to quality and client satisfaction has propelled us to set new industry standards. Excellence isn’t just a goal; it’s our foundation.`,
            link: ''
        }
    ]

    return (
        <div className='home-main'>
            <div className='banner-main'>
                <Banner image={Assets.HomeBanner} contentOne="Transforming ideas into" contentTwo="extraordinary events" button='true' />
            </div>
            <div className='background-setup'>
                <div className='common-space'>
                    <div className='card-main'>
                        <div className='row'>
                            {CardContent.map((data, i) => (
                                <div className='col-12 col-sm-4' key={i}>
                                    <Card data={data} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='about-main'>
                        <AboutSection />
                    </div>
                </div>
                <div className='tree-sec-main'>
                    <div className='common-space'>
                        <TreeSection data={TreeContent} />
                    </div>
                </div>
                <div className='count-main'>
                    <div className='common-space'>
                        <div className='row'>
                            {CountContent.map((item, i) => (
                                <CountSection data={item} key={i} />
                            ))}
                        </div>
                    </div>
                    <div className='count-overlay'></div>
                </div>
                <div className='speciality-main'>
                    <div className='common-space'>
                        {SpecialityContent.map((item, i) => (
                            <Speciality data={item} key={i} />
                        ))}
                    </div>
                </div>
                <div className='client-slide-main'>
                    <div className='common-space'>
                        <ClientSlide />
                    </div>
                </div>
                <div className='affication-sec-main'>
                    <div className='common-space'>
                        <AffiliationSection />
                        <ClientSection />
                    </div>
                </div>
                <div className='our-work-main'>
                    <div className='common-space'>
                        <h1>Our Work</h1>
                        <div className='row'>
                            {OurWorkContent.map((item, i) => (
                                <div className='col-12 col-md-6' key={i}>
                                    <WorkCard data={item} />
                                </div>
                            ))}
                        </div>
                        <div className='more-project-btn'>
                            <button>See more projects</button>
                        </div>
                    </div>
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
    )
}

export default HomeView
