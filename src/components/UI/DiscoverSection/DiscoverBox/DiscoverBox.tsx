import React from 'react';

import { RightArrowSingle, LeftArrowSingle } from '../../svgComponents/index';

type DiscoverBoxProps = {
    boxNo: string;
    heading: string;
};

const DiscoverBox: React.FC<DiscoverBoxProps> = ({ boxNo, heading }) => {
    return (
        <div className={`box box__${boxNo}`}>
            <div className="box__tri">
                <p className="box__heading">{heading}</p>
                <div className="box__explore">
                    <RightArrowSingle />
                    <a href="!#" className="box__explore__btn">
                        Explore
                    </a>
                    <LeftArrowSingle />
                </div>
            </div>
            <div className="box__text">
                <p className="box__paragraph u-margin-bottom-small">Discover</p>
                <p className="box__heading">{heading}</p>
            </div>
        </div>
    );
};

export default DiscoverBox;
