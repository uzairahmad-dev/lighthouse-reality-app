import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import NavigationLink from './NavigationLink/NavigationLink';
import RentalModal from '../../UI/Modal/RentalModal/RentalModal';

import { BuyLink, RealtorLink, RentalLink, WorkLink, LoginLink, SellLink } from '../../UI/svgComponents/index';
import { LogoWhite, TopRealtor1 } from '../../../assets/image/index';

type NavLinksProps = {
    auth: Boolean;
};

const NavLinks: React.FC<NavLinksProps> = ({ auth }) => {
    const [openRentalModal, setOpenRentalModal] = useState<Boolean>(false);

    let navRight = (
        <div className="navbar__links__right">
            <div className="navbar__links__box">
                <RealtorLink className="navbar__links__icon" />
                <NavigationLink link="realtors">Realtors</NavigationLink>
            </div>
            <div className="navbar__links__box">
                <LoginLink className="navbar__links__icon" />
                <NavigationLink link="/login">Login</NavigationLink>
            </div>
            <div className="navbar__links__box">
                <WorkLink className="navbar__links__icon" />
                <NavigationLink link="signup">Work with us</NavigationLink>
            </div>
        </div>
    );

    if (auth) {
        navRight = (
            <div className="navbar__links__right--login">
                <div className="navbar__links__box">
                    <RealtorLink className="navbar__links__icon" />
                    <NavigationLink link="realtors">Realtors</NavigationLink>
                </div>
                <div className="navbar__links__box">
                    <img src={TopRealtor1} alt="user" className="navbar__links--user-image" />
                </div>
                <div className="navbar__links__box">
                    <NavigationLink link="/">Logout</NavigationLink>
                </div>
            </div>
        );
    }

    return (
        <>
            <RentalModal open={openRentalModal} onClose={() => setOpenRentalModal(false)} />
            <div className="navbar__links">
                <div className="navbar__links__left">
                    <div className="navbar__links__box">
                        <SellLink className="navbar__links__icon" />
                        <NavigationLink link="sell">Sell</NavigationLink>
                    </div>
                    <div className="navbar__links__box">
                        <BuyLink className="navbar__links__icon" />
                        <NavigationLink link="buy">Buy</NavigationLink>
                    </div>
                    <div className="navbar__links__box">
                        <RentalLink className="navbar__links__icon" />
                        <span className="navbar__links__text line__hover" onClick={() => setOpenRentalModal(true)}>
                            Rental
                        </span>
                    </div>
                </div>
                <Link to="/">
                    <img className="navbar__links__logo" src={LogoWhite} alt="logo" />
                </Link>
                {navRight}
            </div>
        </>
    );
};

export default NavLinks;
