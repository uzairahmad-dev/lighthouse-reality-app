import React from 'react';

import Showcase from '../../components/Showcase/Showcase';
import InputDouble from '../../components/UI/Input/InputDouble/InputDouble';
import RealtorBox from '../../components/RealtorBox/RealtorBox';

import { RealtorBg } from '../../assets/image/index';

const Realtors: React.FC = () => {
    return (
        <React.Fragment>
            <Showcase bgImg={RealtorBg} heading="Find Realtors" paragraph="Make sure your dreams are in trusted hands.">
                <InputDouble holderTxtS="Enter City Name" holderTxtB="Agent Name (optional)" btnTxt="Search" />
            </Showcase>
            <RealtorBox />
        </React.Fragment>
    );
};

export default Realtors;
