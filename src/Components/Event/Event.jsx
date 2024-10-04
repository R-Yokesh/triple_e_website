import React, { useState, useEffect } from 'react';
import '../../Assets/Css/Event.css';
import Driyah1 from '../../Assets/Images/Events/diriyah1.png';
import Driyah2 from '../../Assets/Images/Events/diriyah2.png';
import Driyah3 from '../../Assets/Images/Events/diriyah3.png';
import Driyah4 from '../../Assets/Images/Events/diriyah4.png';
import Driyah5 from '../../Assets/Images/Events/diriyah5.jpg';

import Ferrari1 from '../../Assets/Images/Events/Ferrari1.png';
import Ferrari2 from '../../Assets/Images/Events/Ferrari2.png';
import Ferrari3 from '../../Assets/Images/Events/Ferrari3.png';
import Ferrari4 from '../../Assets/Images/Events/Ferrari4.png';
import Ferrari5 from '../../Assets/Images/Events/Ferrari5.png';

import RedCrescent1 from '../../Assets/Images/Events/Red1.jpg';
import RedCrescent2 from '../../Assets/Images/Events/Red2.jpg';
import RedCrescent3 from '../../Assets/Images/Events/Red3.jpg';
import RedCrescent4 from '../../Assets/Images/Events/Red4.jpg';
import RedCrescent5 from '../../Assets/Images/Events/Red5.jpg';

import Tadawul1 from '../../Assets/Images/Events/Tadawul1.jpg';
import Tadawul2 from '../../Assets/Images/Events/Tadawul2.jpg';
import Tadawul3 from '../../Assets/Images/Events/Tadawul3.jpg';
import Tadawul4 from '../../Assets/Images/Events/Tadawul4.jpg';
import Tadawul5 from '../../Assets/Images/Events/Tadawul5.jpg';

const Event = () => {
  const events = [
    {
      title: 'Driyah',
      description: 'Promoting Diriyah as a vibrant touristic, social and business destination.',
      images: [Driyah1, Driyah2, Driyah3, Driyah4, Driyah5],
      reverse: false,
    },
    {
      title: 'Ferrari',
      description: 'Launching the new Ferrai model Conceptual themes.',
      images: [Ferrari1, Ferrari2, Ferrari3, Ferrari4, Ferrari5],
      reverse: true,
    },
    {
      title: 'Red Crescent',
      description: 'Highlighting the humanitarian efforts of Red Crescent.',
      images: [RedCrescent1, RedCrescent2, RedCrescent3, RedCrescent4, RedCrescent5],
      reverse: false,
    },

    {
      title: 'Tadawul',
      description: 'Exploring Tadawul’s financial and trading initiatives.',
      images: [Tadawul1, Tadawul2, Tadawul3, Tadawul4, Tadawul5],
      reverse: true,
    },
  ];

  return (
    <div>
      {events.map((event, index) => (
        <EventSection key={index} {...event} />
      ))}
    </div>
  );
};

const EventSection = ({ title, description, images, reverse }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`event-container ${reverse ? 'reverse' : ''}`}>
      <div className="event-left">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="event-right">
        <img src={images[currentImageIndex]} alt={`${title} Event ${currentImageIndex + 1}`} />
        <div className="dots-container">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
