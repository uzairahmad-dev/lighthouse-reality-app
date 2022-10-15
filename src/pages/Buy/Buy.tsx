import React, { useState } from 'react';

import Showcase from '../../components/UI/Showcase/Showcase';
import InputDropdown from '../../components/UI/Input/InputDropdown/InputDropdown';
import BuyContent from './BuyContent/BuyContent';
import { BuyBg } from '../../assets/image/index';

const Buy: React.FC = () => {
    const [searched, setSearched] = useState('');
    const [selected, setSelected] = useState('buy');

    const submitHandler = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        console.log(searched);
        console.log(selected);
    };

    return (
        <React.Fragment>
            <Showcase bgImg={BuyBg} heading="Imagine House" paragraph="We will help you to find what you'll dream of.">
                <InputDropdown
                    submit={submitHandler}
                    selectedValue={selected}
                    selected={(e: React.ChangeEvent<HTMLSelectElement>) => setSelected(e.target.value)}
                    value={(e: React.ChangeEvent<HTMLInputElement>) => setSearched(e.target.value)}
                    holderTxt={searched ? searched : 'Enter address, city'}
                />
            </Showcase>
            <BuyContent />
        </React.Fragment>
    );
};

export default Buy;
