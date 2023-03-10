import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import icon from '../components/images/Alien_pixel.png';
import icon2 from '../components/images/icon-apps.gif';

export default function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My projects</h1>
      <p className="projects-text">I have separated my projects into two categories: games I have designed and developed, and applications I have programmed.</p>
      
      <nav>
        <ul className="projects-nav">
         <div>
          <li className='projects-nav-li'><NavLink to='/projects/games'> Games </NavLink></li>
          <img src={icon} className='icon-games' alt='icon-games' />
         </div>
         <div>
         <img src={icon2} className='icon-apps' alt='icon-apps' />
          <li className='projects-nav-li'><NavLink to='/projects/apps'> Apps </NavLink></li>
         </div>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}
