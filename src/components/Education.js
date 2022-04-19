import React from 'react'
import '../css/Education.css'


const Education = () => {
    return (
        <div className='education' id='education'>
            <div className='container'>
                    <p className='title'>Education</p>
                    <ul className='list-table'>
                        <li>
                            <p className='date'>2020-2022</p>
                            <p className='list-primary'>Sungkyunkwan University</p>
                            <p className='list-secondary'>Master of Science in Engineering</p>
                            <p className='list-tertiary'>Convergence Engineering for Future City</p>
                        </li>
                        <li>
                            <p className='date'>2008-2013</p>
                            <p className='list-primary'> National Research Nuclear University (MEPhI)</p>
                            <p className='list-secondary'><a href='https://en.wikipedia.org/wiki/Specialist_degree' target='_blank'>Specialist degree</a></p>
                            <p className='list-tertiary'>Industrial and Civil Engineering</p>
                        </li>
                    </ul>
            </div>
        </div>
    );
};

export default Education;