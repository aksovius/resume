import React from 'react'
import '../css/Experience.css'


const Experience = () => {
    return (
        <div className='experience' id='experience'>
            <div className='container'>
                <div className='title'>
                    <h2>Experience</h2>
                </div>
                    <ul class="aducation-box theme-bg">
                        <li>
                            <span class="dark-bg">2020-2022</span>
                            <h6>Sungkyunkwan University</h6>
                            <p>Convergence Engineering for Future City</p>
                            <p>MS</p>
                        </li>
                        <li>
                            <span class="dark-bg">2008-2013</span>
                            <h6> National Research Nuclear University (MEPhI)</h6>
                            <p>Industrial and Civil Engineering</p>
                            <p>BEng</p>
                        </li>
                        <li>
                            <span class="dark-bg">2010-2012</span>
                            <h6>Visual Designer</h6>
                            <p>Jakarta Design Institute</p>
                        </li>
                     </ul>
            </div>
        </div>
    );
};

export default Experience;