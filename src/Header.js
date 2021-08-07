import React, { Component } from 'react';
import './styles.css'

import forkSpoon from './assets/fork-spoon.png';
import fb from './assets/fb-icon.png';
import twitter from './assets/twitter-icon.png';
import google from './assets/google-icon.png';
import insta from './assets/insta-icon.png';
import dot from './assets/dot-icon.png';
import pinterest from './assets/pinterest-icon.png';
import wifi from './assets/wifi-icon.png';
import mail from './assets/mail-icon.png';

class Header extends Component {
    render() {
        return (
            <header>
                <div id='left-head'>
                    <img src={forkSpoon} className='icon' alt='fork and spoon logo' />
                <nav>
                    <img src={fb} className='nav-buttons' alt='facebook link'/>
                    <img src={twitter} className='nav-buttons' alt='twitter link'/>
                    <img src={google} className='nav-buttons' alt='google link'/>
                    <img src={insta} className='nav-buttons' alt='instagram link'/>
                    <img src={dot} className='nav-buttons' alt='double-dot link'/>
                    <img src={pinterest} className='nav-buttons' alt='pinterest link'/>
                    <img src={wifi} className='nav-buttons' alt='wifi link'/>
                    <img src={mail} className='nav-buttons' alt='contact link'/>
                
                </nav>
                    <div>
                        <h1>Delicious!</h1>
                <hr />
                        <h3>The best food blog on the web</h3>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;