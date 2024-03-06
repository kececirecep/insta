import React, { useEffect, useState } from 'react'
import { GoHomeFill, GoSearch, GoHeart } from "react-icons/go";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";

import './Menu.scss'
import { NavLink } from 'react-router-dom';

const Menu = () => {
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

  const myIconStyle = {
    fontSize: "26px"
  }
  return (
    <div className='menu-wrapper'>
      <ul>

        <NavLink to="/">
          <li>
            {windowWidth <= 1000 ? (
              <span className="icon">
                <GoHomeFill style={myIconStyle} />
              </span>
            ) : (
              <>
                <span className="icon">
                  <GoHomeFill style={myIconStyle} />
                </span>
                Home
              </>
            )}
          </li>
        </NavLink>

        <NavLink to="/">
          <li>
            {windowWidth <= 1000 ? (
              <span className="icon">
                <GoSearch style={myIconStyle} />
              </span>
            ) : (
              <>
                <span className="icon">
                  <GoSearch style={myIconStyle} />
                </span>
                Search
              </>
            )}
          </li>
        </NavLink>

        <NavLink to="/">
          <li>
            {windowWidth <= 1000 ? (
              <span className="icon">
                <GoHeart style={myIconStyle} />
              </span>
            ) : (
              <>
                <span className="icon">
                  <GoHeart style={myIconStyle} />
                </span>
                Notifications
              </>
            )}
          </li>
        </NavLink>

        <NavLink to="/">
          <li>
            {windowWidth <= 1000 ? (
              <span className="icon">
                <MdOutlineLibraryAdd style={myIconStyle} />
              </span>
            ) : (
              <>
                <span className="icon">
                  <MdOutlineLibraryAdd style={myIconStyle} />
                </span>
                Create
              </>
            )}
          </li>
        </NavLink>

        <NavLink to="/profile">
          <li>
            {windowWidth <= 1000 ? (
              <span className="icon">
                <CgProfile style={myIconStyle} />
              </span>
            ) : (
              <>
                <span className="icon">
                  <CgProfile style={myIconStyle} />
                </span>
                Profile
              </>
            )}
          </li>
        </NavLink>

      </ul>

      <NavLink to="/">
        <div className='menu-logout'>
          {windowWidth <= 1000 ? (
            <CiLogout style={myIconStyle} />

          ) : (
            <> 
              <CiLogout style={myIconStyle} /> 
              Logout
            </>
          )}
        </div>
      </NavLink>

       
    </div>
  )
}

export default Menu