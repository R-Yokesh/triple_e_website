import React from 'react'

function Speciality({ data }) {
    return (
        <section className={data.reverse ? 'row flex-row-reverse' : 'row'}>
            <div className='col-12 col-sm-12 col-lg-5'>
                <div className='speciality-content'>
                    {data.reverse == true ? (
                        <h1><span className='clr-change'>{data.clrHead}</span> {data.head} </h1>
                    ) :
                        (
                            <h1>{data.head} <span className='clr-change'>{data.clrHead}</span></h1>
                        )
                    }
                    <h5>{data.content}</h5>
                    {data.contentTwo && (
                        <h5>{data.contentTwo}</h5>
                    )}

                </div>
            </div>
            <div className='col-12 col-sm-12 col-lg-6'>
                <div className='speciality-image'>
                    <img src={data.image} alt="speciality-image" />
                </div>
            </div>
        </section>
    )
}

export default Speciality
