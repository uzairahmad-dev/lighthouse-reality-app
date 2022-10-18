import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import BeginCard from '../BeginCard/BeginCard';
import HireRealtorModal from '../UI/Modal/HireRealtorModal/HireRealtorModal';
import { PropertyDetails } from '../../assets/svg/index';

const SellDetails: React.FC = () => {
    const [beginCard, setBeginCard] = useState<Boolean>(true);
    const [isOpen, setIsOpen] = useState<Boolean>(false);

    const sellDetailsSlice = useSelector((state: RootState) => state.sellDetails);

    let pageSvg: string = '';
    let pageHeading: string = '';
    let pagePara: string = '';
    let card;

    if (beginCard) {
        pageSvg = PropertyDetails;
        pageHeading = 'Add your Property Details';
        pagePara = 'Begin by telling us the few details about your property';
        card = <BeginCard submit={e: React.SyntheticEvent => } />;
    }

    return (
        <>
            <HireRealtorModal open={isOpen} onClose={() => setIsOpen(false)} />
            <section className="sell__details">
                <div className="sell__details__begin">
                    <div className="sell__details__begin--left">
                        <div>
                            <p className="heading-big">{pageHeading}</p>
                            <p className="paragraph paragraph-primary">{pagePara}</p>
                        </div>
                        <img src={pageSvg} alt="sell_begin" />
                    </div>
                    <div className="sell__details__begin--right">{card}</div>
                </div>
            </section>
            <div>
                <h1>{sellDetailsSlice.city}</h1>
            </div>
        </>
    );
};

export default SellDetails;
