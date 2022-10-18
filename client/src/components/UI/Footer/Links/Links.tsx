import React from 'react';

import Link from './Link/Link';

const Links: React.FC = () => {
    return (
        <div className="footer__links">
            <div>
                <Link to="!#" text="Buy" />
                <Link to="!#" text="Sell" />
                <Link to="!#" text="Rental" />
            </div>
            <div>
                <Link to="!#" text="Login" />
                <Link to="!#" text="Work with us" />
                <Link to="!#" text="Our Realtors" />
            </div>
        </div>
    );
};

export default Links;
