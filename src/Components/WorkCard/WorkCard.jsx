import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function WorkCard({ data }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Automatically slide to the next image after 5 seconds
    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(slideInterval); // Clear interval on component unmount
    }, [currentImageIndex]);

    // Function to handle sliding to the next image
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.images.length);
    };

    // Function to handle sliding to the clicked dot
    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <section className='work-card-sec'>
            <div className='card-img'>
                <img src={data.images[currentImageIndex]} alt={`Slide-${currentImageIndex}`} />
                <div className="dots-container">
                    {data.images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => goToImage(index)}
                        />
                    ))}
                </div>
            </div>
            <div className='row'>
                <div className='work-card-content'>
                    <p className='card-color-text'>{data.head}</p>
                    <p>{data.content}</p>
                </div>
                <div className='card-link-sec'>
                    <Link to='/event'>Know More</Link>
                </div>
            </div>
        </section>
    );
}

export default WorkCard;
