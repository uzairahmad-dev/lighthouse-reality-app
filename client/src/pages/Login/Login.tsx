import React from 'react';
import { Link } from 'react-router-dom';

import { LoginSvg } from '../../assets/svg/index';

const Login: React.FC = () => {
    return (
        <section className="login__realtors">
            <div className="login__realtors__content">
                <img src={LoginSvg} alt="login-svg" className="login__svg u-margin-top-medium" />
                <div>
                    <div className="login__form">
                        <p className="heading-big">Realtors Login</p>
                        <p className="paragraph-medium u-margin-bottom-small">
                            Welcome Back at Lighthouse Realty. Make <br />
                            your dreams true with us
                        </p>
                        <input className="input__normal u-margin-bottom-small" type="email" placeholder="Enter your E-mail" />
                        <input className="input__normal u-margin-bottom-small" type="password" placeholder="Enter your Password" />
                        <button className="btn btn--rec">Login</button>
                    </div>
                    <div className="login__not-yet">
                        <p className="heading-big">Become Realtor</p>
                        <p className="paragraph-medium">
                            Become a member at Lighthouse Realty by just <br /> entering your information and start working.{' '}
                        </p>
                        <Link to="signup" className="btn btn--rec u-margin-top-small">
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
