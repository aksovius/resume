import React from 'react';
import '../css/Publications.css'

const Publications = () => {
    return (
        <div className='publications' id='publications'>
            <div className='container'>
                    <p className='title'>Publications</p>
                    <ul className='list-table'>
                        <li>
                            <p className='date'>2020-2022</p>
                            <p className='list-primary'>title</p>
                            <p className='list-secondary'>Master of Science in Engineering</p>
                            <p className='list-tertiary'>Convergence Engineering for Future City</p>
                        </li>
                        <li>
                            <p className='date'>2008-2013</p>
                            <p className='list-primary'> title</p>
                            <p className='list-secondary'>Specialist degree</p>
                            <p className='list-tertiary'>Industrial and Civil Engineering</p>
                        </li>
                    </ul>
            </div>
        </div>
    );
};

export default Publications;