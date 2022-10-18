import React from 'react';

type RadioProps = {
    label: string;
    value: string;
};

const Radio: React.FC<RadioProps> = ({ value, label }) => {
    return (
        <>
            <input type="radio" id={value} name="property-options" value={value} required />
            <label htmlFor={value}>{label}</label>
        </>
    );
};

export default Radio;
