import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <img src={('assets/next-icon.png')} alt="" className='next-btn' />
            <img src={('assets/back-icon.png')} alt="" className='back-btn'/>

            <div className="slider">
                <ul>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={('assets/user-1.png')} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Educo, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Educo University was one of the best decision of my life. The supportive community, state-of-the-art facilities and commitment to academi
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials;
