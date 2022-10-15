import React from 'react';

import DiscoverSection from '../../components/UI/DiscoverSection/DiscoverSection';
import FindHomeSection from '../../components/UI/FindHomeSection/FindHomeSection';
import GridContainer from '../../components/GridContainer/GridContainer';

const HomePage: React.FC = () => {
    return (
        <>
            <DiscoverSection />
            <FindHomeSection />
            <GridContainer />
        </>
    );
};

export default HomePage;
