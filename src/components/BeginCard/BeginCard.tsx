import React from 'react';

import Radio from '../UI/Radio/Radio';
import StyledRadio from '../UI/Radio/StyledRadio/StyledRadio';

type BeginCardProps = {
    submit: (e: React.SyntheticEvent) => void;
    srHandler: (e: React.SyntheticEvent) => void;
    pTypeHandler: (e: React.SyntheticEvent) => void;
    pOptHandler: (e: React.SyntheticEvent) => void;
};

const BeginCard: React.FC<BeginCardProps> = ({ submit, srHandler, pOptHandler, pTypeHandler }) => {
    return (
        <form className="sell__details__card w-6" onSubmit={submit}>
            <p className="sell__details__card-heading">Begin Posting your Property</p>
            <p className="sell__details__card-heading-sub">You want to</p>
            <div className="radio-toolbar" onChange={srHandler}>
                <input type="radio" id="sell" name="sellOrRent" value="sell" required />
                <label className="inc__padding-radio u-margin-right-medium" htmlFor="sell">
                    Sell
                </label>
                <input type="radio" id="rent" name="sellOrRent" value="rent" required />
                <label className="inc__padding-radio" htmlFor="rent">
                    Rent
                </label>
            </div>
            <p>&nbsp;</p>
            <p className="sell__details__card-heading-sub">And its a</p>
            <StyledRadio value="residential" label="Residential" name="property-type" selected={pTypeHandler} />
            <StyledRadio value="commercial" label="Commercial" name="property-type" selected={pTypeHandler} />
            <p>&nbsp;</p>
            <div className="radio-toolbar" onChange={pOptHandler}>
                <Radio label="House" value="house" />
                <Radio label="Apartment" value="apartment" />
                <Radio label="Villa" value="villa" />
                <Radio label="Farmhouse" value="farmhouse" />
                <Radio label="Land" value="land" />
                <Radio label="Other" value="other" />
            </div>
            <p>&nbsp;</p>
            <button type="submit" className="btn btn--rec">
                Begin to post property
            </button>
        </form>
    );
};

export default BeginCard;
