import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import logo from '../static/logo.svg'
import '../css/Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return ( 
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img  alt='logo'/>
                </a>
                <div className='hamburger' onClick={handleClick}>
                {click ? (<MenuIcon size={30} style={{ color: '#ffffff' }} />)
                        : (<MenuOpenIcon size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <a href='#home'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Experience</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Education</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Hobby</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
};

export default Navbar;