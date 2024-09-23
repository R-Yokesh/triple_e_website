import React from 'react'
import Assets from '../../Assets/AssetsFormat/Assets'

function TreeSection({ data }) {
    return (
        <section className='tree-sec'>
            <div className='text-center'>
                <img src={Assets.TreeIcon} alt="tree-logo" />
            </div>
            {data.map((item, i) => (
                <div className={`${item.pose} tree-content`} key={i} >
                    <p className='tree-head'>{item.head}</p>
                    <p className='tree-text'>{item.content}</p>
                </div>
            ))}
        </section >
    )
}

export default TreeSection
