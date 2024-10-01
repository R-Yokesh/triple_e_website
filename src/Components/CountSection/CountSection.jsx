import React from 'react'

function CountSection({ data }) {
    return (
        <section className='count-sec'>
            <h2 className='number'>{data.count}</h2>
            <h4 className={data.clr}>
                {/* Check if the name is 'Regions in KSA', then split it manually */}
                {data.name === 'Regions in KSA' ? (
                    <>
                        Regions in <br /> KSA
                    </>
                ) : (
                    // Default behavior for other names
                    data.name.split(' ').map((part, index) => (
                        <span key={index}>
                            {part}
                            {index !== data.name.split(' ').length - 1 && <br />}
                        </span>
                    ))
                )}
            </h4>
        </section>
    );
}

export default CountSection;
