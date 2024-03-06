import React, { useEffect, useState } from 'react'
import './Logo.scss'
import { FaInstagram } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


const Logo = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='logo'> 
      <NavLink to="/">
        <li>
          {windowWidth <= 1000 ? (
            <span className="iconResize">
              <FaInstagram />
            </span>
          ) : (
            <>
              <img src="/images/logo.png" width="120px" alt="" />
            </>
          )}
        </li>
      </NavLink>

    </div>
  )
}

export default Logo