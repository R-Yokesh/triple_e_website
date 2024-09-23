import React from 'react'

function Card({ data }) {
    return (
        <section className='card-sec'>
            <img src={data.img} alt="card-img" />
            <div className='card-content'>
                <h3>{data.head}</h3>
                <h5>{data.content}</h5>
            </div>
            <div className='card-overlay'></div>
        </section>
    )
}

export default Card
