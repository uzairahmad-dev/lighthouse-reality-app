import React from 'react';

const Subscribe: React.FC = () => {
    return (
        <div className="footer__right">
            <p className="footer__heading u-margin-bottom-small u-margin-top-medium">Subscribe for Latest Properties</p>
            <input type="text" className="footer__input u-margin-bottom-small" placeholder="Enter your E-mail" /> <br />
            <a href="!#" className="btn btn--primary dec__padding">
                Subscribe
            </a>
        </div>
    );
};

export default Subscribe;
