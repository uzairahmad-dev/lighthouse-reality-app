import React from 'react';


const InputDouble = props => {
    return (
        <div className="InputDouble__search">
            <input type="text" className="InputDouble__search__input InputDouble__search__input--small" placeholder={props.holderTxtS} />
            <input type="text" className="InputDouble__search__input" placeholder={props.holderTxtB} />
            <a href="!#" className="btn btn--rec">{props.btnTxt}</a>
        </div>
    );
};

export default InputDouble;