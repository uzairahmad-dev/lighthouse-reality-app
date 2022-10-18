import React from 'react';

import { LinkArrow } from '../../../svgComponents/index';

type LinkProps = {
    to: string;
    text: string;
};

const Link: React.FC<LinkProps> = ({ to, text }) => {
    return (
        <div>
            <LinkArrow />
            &nbsp;
            <a href={to} className="footer__links__text">
                {text}
            </a>
        </div>
    );
};

export default Link;
