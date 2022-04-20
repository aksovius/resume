import React from 'react';
import '../css/SideNav.css';



const SideNav = () => {

    const [hash, setHash] = React.useState(() => window.location.hash);

    const hashChangeHandler = React.useCallback(() => {
        setHash(window.location.hash);
    }, []);

    React.useEffect(() => {
        window.addEventListener('hashchange', hashChangeHandler);
        return () => {
            window.removeEventListener('hashchange', hashChangeHandler);
        };
    }, []);

    const section = ['#home','#about', '#education', '#experience', '#publications', '#hobby']
   
    const [offset, setOffset] = React.useState(0);

    /*React.useEffect(() => {
        window.addEventListener('scroll', () => {
            var st = window.pageYOffset
            if (st > lastScrollTop){
                console.log('down')
             } else {
                console.log('up')
            }
            lastScrollTop = st <= 0 ? 0 : st;
        });
    }, []);*/

    React.useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);        
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    React.useEffect(() =>{
        
        if ( 600 > offset){
            window.history.pushState({}, "", section[0])
            setHash(section[0])
        } 
        else if ( 600 < offset && offset < 1200){
            window.history.pushState({}, "", section[1])
            setHash(section[1])
        } 
        else if ( 1200 < offset && offset < 1800) {
            window.history.pushState({}, "", section[2])
            setHash(section[2])
        }
        else if ( 2200 < offset && offset < 3000) {
            window.history.pushState({}, "", section[3])
            setHash(section[3])
        }
        else if ( 3000 < offset &&  offset < 3500) {
            window.history.pushState({}, "", section[4])
            setHash(section[4])
        }
        else if ( 3500 < offset && offset < 4000) {
            window.history.pushState({}, "", section[5])
            setHash(section[5])
        
        }
    },[offset]);
    
    
    /*console.log(offset)*/

    return (
        <ul className='side-nav'>
            <li className='side-item'>
                <a href='#home' ><span className={hash === '#home' ? "active-dot" : "dot"}></span></a>
            </li>
            <li className='side-item'>
                <a href='#about' ><span className={hash === '#about' ? "active-dot" : "dot"}></span></a>
            </li>
            <li className='side-item'>
                <a href='#education' ><span className={hash === '#education' ? "active-dot" : "dot"}></span></a>
            </li>
            <li className='side-item'>
                <a href='#experience'><span className={hash === '#experience' ? "active-dot" : "dot"}></span></a>
            </li>
            <li className='side-item'>
                <a href='#publications' ><span className={hash === '#publications' ? "active-dot" : "dot"}></span></a>
            </li>
            <li className='side-item'>
                <a href='#hobby' ><span className={hash === '#hobby' ? "active-dot" : "dot"}></span></a>
            </li>
        </ul>
    );
};

export default SideNav;
