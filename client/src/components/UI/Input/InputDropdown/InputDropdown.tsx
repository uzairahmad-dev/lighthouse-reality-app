import React from 'react';

import { Search } from '../../svgComponents/index';

type InputDropdownProps = {
    holderTxt: string;
    selectedValue: string;
    value: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selected: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    submit: (e: React.SyntheticEvent) => void;
};

const InputDropdown: React.FC<InputDropdownProps> = ({ holderTxt, value, selected, submit, selectedValue }) => {
    return (
        <form className="InputDropdown__search" onSubmit={submit}>
            <input type="text" className="InputDropdown__search__input" placeholder={holderTxt} onChange={value} required />
            <select className="InputDropdown__search__options InputDropdown__search__options-main" id="label" name="label" value={selectedValue} onChange={selected}>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
            </select>
            <button type="submit" className="InputDropdown__search--icon">
                <Search />
            </button>
        </form>
    );
};

export default InputDropdown;
