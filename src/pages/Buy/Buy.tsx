import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Showcase from '../../components/Showcase/Showcase';
import InputDropdown from '../../components/UI/Input/InputDropdown/InputDropdown';
import BuyContent from './BuyContent/BuyContent';
import { BuyBg } from '../../assets/image/index';

const Buy: React.FC = () => {
    const [searched, setSearched] = useState<string>('');
    const [selected, setSelected] = useState<string>('buy');

    const [searchParams] = useSearchParams();
    const rent: string | null = searchParams.get('rent');

    useEffect(() => {
        if (rent && rent === 'true') {
            setSelected('rent');
        }
    }, [rent]);

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
                    holderTxt={searched ? searched : 'Enter City Name'}
                />
            </Showcase>
            <BuyContent />
        </React.Fragment>
    );
};

export default Buy;
