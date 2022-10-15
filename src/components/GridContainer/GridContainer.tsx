import React from 'react';

import ServicesSection from '../UI/ServicesSection/ServicesSection';
import TopRealtorsSection from '../UI/TopRealtorsSection/TopRealtorsSection';
import ClientsSection from '../UI/ClientsSection/ClientsSection';

const GridContainer: React.FC = (props) => {
    return (
        <div className="container">
            <ServicesSection />
            <TopRealtorsSection />
            <ClientsSection />
        </div>
    );
};

export default GridContainer;
