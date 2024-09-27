import React from 'react'
import { Link } from 'react-router-dom'

function WorkCard({ data }) {
    return (
        <section className='work-card-sec'>
            <div className='card-img'>
                <img src={data.image} alt="Card-img" />
            </div>
            <div className='row'>
                <div className='work-card-content'>
                    <p className='card-color-text'>{data.head}</p>
                    <p>{data.content}</p>
                </div>
                <div className='card-link-sec'>
                    <Link to={data.link}>Know More</Link>
                </div>
            </div>
        </section>
    )
}

export default WorkCard
