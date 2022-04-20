import React from 'react';


const Publications = () => {
    return (
       
            <div className='container' id='publications'>
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
      
    );
};

export default Publications;