import React from 'react';

type InputDoubleProps = {
    holderTxtS: string;
    holderTxtB: string;
    btnTxt: string;
};

const InputDouble: React.FC<InputDoubleProps> = ({ holderTxtB, holderTxtS, btnTxt }) => {
    return (
        <div className="InputDouble__search">
            <input type="text" className="InputDouble__search__input InputDouble__search__input--small" placeholder={holderTxtS} />
            <input type="text" className="InputDouble__search__input" placeholder={holderTxtB} />
            <a href="!#" className="btn btn--rec">
                {btnTxt}
            </a>
        </div>
    );
};

export default InputDouble;
