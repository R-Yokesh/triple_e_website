import React, { useEffect } from 'react';
import '../../Assets/Css/Event.css';

import DriyahVideo from '../../Assets/Images/CoverVideos/diriyah_cover video.webm';
import FerrariImage from '../../Assets/Images/Events/Ferrari3.png'
// import RedCrescentVideo from '../../Assets/Images/CoverVideos/red crescent_cover video.webm';
import RedCrescentVideo from '../../Assets/Images/CoverVideos/red_crescent_cover video.mp4';
import TadawulVideo from '../../Assets/Images/CoverVideos/tadawul_cover video.webm';

const Event = () => {
  const events = [
    {
      title: 'Driyah',
      description: 'Promoting Diriyah as a vibrant touristic, social and business destination.',
      video: DriyahVideo,
      isFerrari: false, // Add a flag to identify Ferrari event
      reverse: false,
    },
    {
      title: 'Ferrari',
      description: 'Launching the new Ferrari model Conceptual themes.',
      isFerrari: true, // Set the Ferrari event flag to true
      reverse: true,
    },
    {
      title: 'Red Crescent',
      description: 'Highlighting the humanitarian efforts of Red Crescent.',
      video: RedCrescentVideo,
      isFerrari: false,
      reverse: false,
    },
    {
      title: 'Tadawul',
      description: 'Exploring Tadawul’s financial and trading initiatives.',
      video: TadawulVideo,
      isFerrari: false,
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

const EventSection = ({ title, description, video, reverse, isFerrari }) => {
  useEffect(() => {
    if (!isFerrari) {
      const handleScroll = () => {
        const section = document.querySelector(`[data-title="${title}"]`);
        if (section) {
          const rect = section.getBoundingClientRect();
          const inView = rect.top < window.innerHeight && rect.bottom > 0;
          if (inView) {
            section.querySelector('video').play();
          } else {
            section.querySelector('video').pause();
          }
        }
      };

      handleScroll(); // Trigger on component load
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [title, isFerrari]);

  return (
    <div className={`event-container ${reverse ? 'reverse' : ''}`} data-title={title}>
      <div className="event-left">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="event-right">
        {isFerrari ? (
          <img
            src={FerrariImage}
            alt={`${title} cover`}
            className="event-image"
          />
        ) : (
          <video
            src={video}
            muted
            loop
            playsInline
            className="event-video"
            preload="auto"
            onCanPlay={() => console.log(`${title} video is ready to play!`)}
            onError={() => console.error(`${title} video failed to load!`)}
          />
        )}
      </div>
    </div>
  );
};

export default Event;
