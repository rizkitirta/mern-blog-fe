import React from 'react';
import Logo from '../../../../src/assets/images/logo.svg';
import './footer.scss';

const Icon = (props) => {
    return (
        <div className='icon-wrapper'>
            <img src={props.img}  className='icon-medsos'/>
        </div>
    )
}

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div>
                <img src={Logo} className="logo"/>
            </div>
            <div className='social-wrapper'>
                <Icon img={Logo} />
                <Icon img={Logo} />
                <Icon img={Logo} />
                <Icon img={Logo} />
            </div>                
        </div>
        <div className='copyright'>
            <p>copyright</p>
        </div>
    </div>
  );
};

export default Footer;
