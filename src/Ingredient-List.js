import React, { Component } from 'react';
import './styles.css'

import list from './assets/paper-list.png'

class Recipe extends Component {
    render() {
        return (
            <section>
                <img src={list} alt='notepad'/>
            </section>
        )
    }
}
export default Recipe;