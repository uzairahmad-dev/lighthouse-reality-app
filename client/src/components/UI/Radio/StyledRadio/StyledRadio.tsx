import React from 'react';

type StyledRadioProps = {
    value: string;
    label: string;
    name: string;
    selected: (e: React.SyntheticEvent) => void;
};

const StyledRadio: React.FC<StyledRadioProps> = ({ selected, value, name, label }) => {
    return (
        <div className="sell__details__radio-group u-margin-bottom-small">
            <input type="radio" className="sell__details__radio-input" id={value} name={name} value={value} onChange={selected} required />
            <label htmlFor={value} className="sell__details__radio-label">
                <span className="sell__details__radio-button"></span>
                {label}
            </label>
        </div>
    );
};

export default StyledRadio;
