import React from 'react'

function Banner({ image, contentOne, contentTwo, button }) {
    return (
        <section className='banner-sec'>
            <img src={image} alt="Banner-image" />
            <div className='banner-content'>
                <h1>{contentOne}</h1>
                {contentTwo &&
                    <h1>{contentTwo}</h1>
                }
                {button &&
                    <div className='row'>
                        <button>Learn More</button>
                        <button>Reach Out</button>
                    </div>

                }
            </div>
        </section>
    )
}

export default Banner
