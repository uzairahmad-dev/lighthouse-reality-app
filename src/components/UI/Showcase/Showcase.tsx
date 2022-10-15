import React from 'react';
import styled from 'styled-components';

interface StyledDivProps {
    background: string;
}

type ShowcaseProps = {
    bgImg: string;
    heading: string;
    paragraph: string;
    children: React.ReactNode;
};

const StyledDiv = styled.div<StyledDivProps>`
    width: 100%;
    height: 80vh;
    background: ${({ background }) => `url(${background}) no-repeat center`};
    background-size: cover;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
    }
`;

const Showcase: React.FC<ShowcaseProps> = ({ bgImg, heading, paragraph, children }) => {
    return (
        <section className="showcase">
            <StyledDiv background={bgImg}></StyledDiv>
            <div className="showcase__text-box">
                <div className="showcase__text-box--heading">{heading}</div>
                <p className="showcase__text-box--text">{paragraph}</p>
            </div>
            {children}
        </section>
    );
};

export default Showcase;
