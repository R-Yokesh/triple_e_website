import React from 'react'

function CountSection({ data }) {
    return (
        <section className='count-sec'>
            <h2 className='number'>{data.count}</h2>
            <h4 className={data.clr}>{data.name}</h4>
        </section>
    )
}

export default CountSection
