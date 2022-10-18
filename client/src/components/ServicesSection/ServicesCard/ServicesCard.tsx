import React from 'react';

type ServicesCardProps = {
    heading: string;
    paragraph: string;
    btnText: string;
    children: React.ReactNode;
};

const ServicesCard: React.FC<ServicesCardProps> = ({ heading, paragraph, btnText, children }) => {
    return (
        <div className="services__container__card">
            {children}
            <p className="services__container__card__heading">{heading}</p>
            <p className="services__container__card__text">{paragraph}</p>
            <a href="!#" className="btn-text">
                {btnText}
            </a>
        </div>
    );
};

export default ServicesCard;
