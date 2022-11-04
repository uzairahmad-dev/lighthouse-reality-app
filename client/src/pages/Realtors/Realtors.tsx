import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { animateScroll } from 'react-scroll';

import Showcase from '../../components/Showcase/Showcase';
import InputDouble, { RealtorFormValues } from '../../components/UI/Input/InputDouble/InputDouble';
import RealtorBox from '../../components/RealtorBox/RealtorBox';
import RealtorSearched from '../../components/RealtorSearched/RealtorSearched';
import { RealtorBg } from '../../assets/image/index';

const Realtors: React.FC = () => {
    const [searchRealtor, setSearchRealtor] = useState<{ city: string; name: string }>({
        city: '',
        name: ''
    });
    const [isSubmit, setIsSubmit] = useState<Boolean>(false);

    const formSubmit: SubmitHandler<RealtorFormValues> = ({ city, name }) => {
        setSearchRealtor({ ...searchRealtor, city, name });
        setIsSubmit(true);
        animateScroll.scrollTo(600, {
            smooth: true,
            delay: 100,
            duration: 1000
        });
    };
    return (
        <React.Fragment>
            <Showcase bgImg={RealtorBg} heading="Find Realtors" paragraph="Make sure your dreams are in trusted hands.">
                <InputDouble smallPH="Agent Name (optional)" largePH="Enter City Name" formSubmit={formSubmit} />
            </Showcase>
            {isSubmit ? <RealtorSearched searched={searchRealtor} /> : <RealtorBox />}
        </React.Fragment>
    );
};

export default Realtors;
