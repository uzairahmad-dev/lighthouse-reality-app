import React from 'react';

import NavLinks from './NavLinks/NavLinks';

type NavbarProps = {
    navClass: string;
};

const Navbar: React.FC<NavbarProps> = ({ navClass }) => {
    return (
        <nav className={navClass}>
            <NavLinks auth={false} />
        </nav>
    );
};

export default Navbar;
