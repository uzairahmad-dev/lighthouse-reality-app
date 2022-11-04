import React from 'react';

import SideBarLink from './SideBarLink/SideBarLink';
import { UserSvg, CustomerSvg, UploadSvg, SettingsSvg } from '../../assets/svg';

const ProfileSideBar: React.FC = () => {
  return (
    <nav className="user-view__menu">
        <ul className="side-nav">
            <SideBarLink 
                text='Profile'
                svg={UserSvg}
                to='/profile'
            />
            <SideBarLink 
                text='Listings'
                svg={CustomerSvg}
                to='listings'
            />
            <SideBarLink 
                text='Post Property'
                svg={UploadSvg}
                to='post-property'
            />
            <SideBarLink 
                text='Settings'
                svg={SettingsSvg}
                to='settings'
            />
        </ul>
    </nav>
  )
}

export default ProfileSideBar;

{/* <div className="admin-nav">
    <h5 className="admin-nav__heading">Admin</h5>
    <ul className="side-nav">
        <li><a href="#"><img src="./img/sell-primary.svg" alt="profile">Manage Properties</a></li>
        <li><a href="#"><img src="./img/realtor-primary.svg" alt="profile">Manage Realtors</a></li>
    </ul>
</div>   */}