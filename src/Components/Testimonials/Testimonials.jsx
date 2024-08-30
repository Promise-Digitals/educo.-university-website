import React, { useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {

    const slider = useRef();
    let translateX = 0;

    const slideForward = ()=>{
        if(translateX > -50){
            translateX -= 25;
        }
        slider.current.style.transform = `translateX(${translateX}%)`
    }

    const slideBackward = ()=>{
        if(translateX < 0){
            translateX += 25;
        }
        slider.current.style.transform = `translateX(${translateX}%)`
    }

    return (
        <div className='testimonials'>
            <img src={('assets/next-icon.png')} alt="" className='next-btn' onClick={slideForward}/>
            <img src={('assets/back-icon.png')} alt="" className='back-btn' onClick={slideBackward}/>

            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={('assets/user-1.png')} alt="" />
                                <div>
                                    <h3>Kylie Jackson</h3>
                                    <span>Educo, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Educo University was one of the best decision of my life. The supportive community, state-of-the-art facilities and commitment to academic excellence have truly been amazing.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={('assets/user-2.png')} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Educo, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Educo University was one of the best decision of my life. The supportive community, state-of-the-art facilities and commitment to academic excellence have truly been amazing.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={('assets/user-3.png')} alt="" />
                                <div>
                                    <h3>Janet Dean</h3>
                                    <span>Educo, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Educo University was one of the best decision of my life. The supportive community, state-of-the-art facilities and commitment to academic excellence have truly been amazing.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={('assets/user-4.png')} alt="" />
                                <div>
                                    <h3>Mike Steven</h3>
                                    <span>Educo, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Educo University was one of the best decision of my life. The supportive community, state-of-the-art facilities and commitment to academic excellence have truly been amazing.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials;
