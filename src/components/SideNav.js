import React from 'react';
import '../css/SideNav.css';

const useHash = () => {
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
  
    const updateHash = React.useCallback(
      newHash => {
        if (newHash !== hash) window.location.hash = newHash;
      },
      [hash]
    );
  
    return [hash, updateHash];
};


const SideNav = () => {
    const [hash] = useHash();
    
    return (
        <div className='side-nav'>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <a href='#home' ><span className={hash==='#home'? "active":"dot"}></span></a>
                </li>
                <li className='nav-item'>
                    <a href='#about' ><span className={hash==='#about'? "active":"dot"}></span></a>
                </li>
                <li className='nav-item'>
                    <a href='#education' ><span className={hash==='#education'? "active":"dot"}></span></a>
                </li>
                <li className='nav-item'>
                    <a href='#experience'><span className={hash==='#experience'? "active":"dot"}></span></a>
                </li>
                <li className='nav-item'>
                    <a href='#publications' ><span className={hash==='#publications'? "active":"dot"}></span></a>
                </li>
                <li className='nav-item'>
                    <a href='#hobby' ><span className={hash==='#hobby'? "active":"dot"}></span></a>
                </li>
            </ul>
        </div>
    );
};

export default SideNav;
