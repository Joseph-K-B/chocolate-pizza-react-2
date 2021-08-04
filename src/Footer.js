import React, { Component } from "react";
import './styles.css'

import author from './assets/author-pic.png'
import forkSpoon from './assets/fork-spoon.png'

class Footer extends Component {
    render() {
        return (
            <section>
                <div>
                    <img src={author} alt='Author: Vanessa Stevenson' />
                    <h2>Vanessa Stevenson</h2>
                    <p>Food enthusiast, photography fan. Add a pinch of raw foods anf that's pretty much who I am</p>
                </div>
                <button>Share Recipe</button>
                <div>
                    <hr />
                    <img src={forkSpoon} alt='Fork and Spoon' />
                    <p>Delicious &copy; 2013 &#8226; All Rights Reserved. <br /> Proudly Published With Ghost.</p>
                </div>
            </section>
        );
    }
}
export default Footer;