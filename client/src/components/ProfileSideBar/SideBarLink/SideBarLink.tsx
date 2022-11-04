import React from 'react';
import { NavLink } from 'react-router-dom';

type SideBarLinkProps = {
    to: string
    svg: string
    text: string
}

const SideBarLink: React.FC<SideBarLinkProps> = ({ to, svg, text }) => {

  return (
    <li>
        <NavLink to={to} end className={({ isActive }) => isActive ? "side-nav--active" : '' }>
            <img src={svg} alt="profile" />{text}
        </NavLink>
    </li>
  )
}

export default SideBarLink