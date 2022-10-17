import React, { useState } from 'react';

import { SignupSvg } from '../../assets/svg/index';

const Signup: React.FC = () => {
    const [confirmed, setConfirmed] = useState(false);

    const signupConfirmedHandler = () => {
        setConfirmed(true);
    };

    let form = (
        <form className="sign-up__form">
            <p className="heading-big">Work with us</p>
            <p className="paragraph-medium u-margin-bottom-medium">Become a member at Lighthouse Realty by just entering your information and start working. </p>
            <input className="input__normal u-margin-bottom-small" type="text" placeholder="Enter your Full Name" />
            <input className="input__normal u-margin-bottom-small" type="email" placeholder="Enter your E-mail" />
            <input className="input__normal u-margin-bottom-small" type="text" placeholder="Enter your Phone No." />
            <input className="input__normal u-margin-bottom-small" type="password" placeholder="Enter Password" />
            <input className="input__normal u-margin-bottom-medium" type="password" placeholder="Repeat Password" />
            <button className="btn btn--rec" onClick={signupConfirmedHandler}>
                Sign Up
            </button>
        </form>
    );

    if (confirmed) {
        form = (
            <form className="sign-up__form">
                <p className="heading-big u-center-text">Personal details</p>
                <div className="confirmed-inputs">
                    <label className="input-label" htmlFor="office-address">
                        Office Address:{' '}
                    </label>
                    <input name="office-address" className="input__small u-margin-bottom-small u-margin-left-huge" type="text" placeholder="Office address" />
                    <label className="input-label" htmlFor="experience">
                        Experience:{' '}
                    </label>
                    <input name="experience" className="input__small u-margin-bottom-small u-margin-left-huge" type="number" placeholder="Years" />
                    <label className="input-label" htmlFor="bio">
                        About You:{' '}
                    </label>
                    <textarea className="input__small u-margin-left-huge" name="bio" placeholder="Tell customers about yourself"></textarea>
                    <p className="input-label u-margin-top-small">Upload your profile:</p>
                    <a href="!#" className="btn btn--rec btn--rec-small u-margin-left-huge u-margin-bottom-medium">
                        Upload Image
                    </a>
                </div>
                <button className="btn btn--rec">Submit</button>
            </form>
        );
    }

    return (
        <section className="sign-up__realtors">
            <div className="sign-up__realtors__content">
                <img src={SignupSvg} alt="sign-up" className="sign-up__svg u-margin-top-medium" height={417} width={520} />
                {form}
            </div>
        </section>
    );
};

export default Signup;
