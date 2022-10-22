import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import InputSimple from '../../components/UI/Input/InputSimple/InputSimple';
import Showcase from '../../components/Showcase/Showcase';
import SellContent from './SellContent/SellContent';
import SellDetails from '../../components/SellDetails/SellDetails';
import { AppDispatch } from '../../store';
import { updateCity } from '../../store/SellDetails/SellDetailsSlice';
import { SellBg } from '../../assets/image/index';

const Sell: React.FC = () => {
    const [searchedCity, setSearchedCity] = useState<string>('');
    const [onSearch, setOnSearch] = useState(true);

    const dispatch = useDispatch<AppDispatch>();

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(updateCity(searchedCity));
        setOnSearch(false);
    };

    let pageContent = (
        <React.Fragment>
            <Showcase bgImg={SellBg} heading="Sell or Rent your Home" paragraph="We've partnered with companies to help you sell, buy and move. Find out what options are available for your home.">
                <InputSimple holderText="Enter City Name" btnText="Get Started" submit={submitHandler} changed={(e: React.ChangeEvent<HTMLInputElement>) => setSearchedCity(e.target.value)} />
            </Showcase>
            <SellContent />
        </React.Fragment>
    );

    if (!onSearch) {
        // pageContent = <SellDetails />;
    }

    return pageContent;
};

export default Sell;
