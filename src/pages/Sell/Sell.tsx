import React, { useState } from 'react';

import InputSimple from '../../components/UI/Input/InputSimple/InputSimple';
import Showcase from '../../components/Showcase/Showcase';
import SellContent from './SellContent/SellContent';
import { SellBg } from '../../assets/image/index';
// import ForSaleDetails from '../../components/ForSaleDetails/ForSaleDetails';

const Sell: React.FC = () => {
    const [searched, setSearched] = useState('');
    const [onSearch, setOnSearch] = useState(true);

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(searched);
        setOnSearch(false);
    };

    let pageContent = (
        <React.Fragment>
            <Showcase bgImg={SellBg} heading="Sell or Rent your Home" paragraph="We’ve partnered with companies to help you sell, buy and move. Find out what options are available for your home.">
                <InputSimple holderText="Enter City Name" btnText="Get Started" submit={submitHandler} changed={(e: React.ChangeEvent<HTMLInputElement>) => setSearched(e.target.value)} />
            </Showcase>
            <SellContent />
        </React.Fragment>
    );

    // if (!onSearch) {
    //     pageContent = <ForSaleDetails city={searched} />;
    // }

    return pageContent;
};

export default Sell;
