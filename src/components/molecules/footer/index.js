import React from 'react';
import Logo from '../../../../src/assets/images/logo.svg';
import IgIcon from '../../../../src/assets/icons/ig.png';
import FbIcon from '../../../../src/assets/icons/fb.png';
import MailIcon from '../../../../src/assets/icons/mail.png';
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
                <Icon img={IgIcon} />
                <Icon img={FbIcon} />
                <Icon img={MailIcon} />
            </div>                
        </div>
        <div className='copyright'>
            <p>copyright</p>
        </div>
    </div>
  );
};

export default Footer;
