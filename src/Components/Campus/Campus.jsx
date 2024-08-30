import React from 'react';
import './Campus.css'

const Campus = () => {
    return (
        <div className='campus'>
            <div className="gallery">
                <img src={('assets/gallery-1.png')} />
                <img src={('assets/gallery-2.png')} />
                <img src={('assets/gallery-3.png')} />
                <img src={('assets/gallery-4.png')} />
            </div>
            <button className='btn teal-btn'>More Images<img src={('assets/white-arrow.png')}  alt="" /></button>
        </div>
    )
}

export default Campus;
