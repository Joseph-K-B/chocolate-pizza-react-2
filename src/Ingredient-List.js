import React, { Component } from 'react';
import './styles.css'

import list from './assets/paper-list.png'

class Ingredients extends Component {
    render() {
        return (
            <section>
                <div id='notepad'>
                <img src={list} alt='notepad'>
                </img>
                <ul id='left-list'>
                    <li>1/2 cups milk</li>
                    <li>1/1 cup mascarpone</li>
                    <li>1/2 tsp pink salt</li>
                    <li>1 lb Black Mission Figs</li>
                    <li>1/2 cup brown sugar</li>
                    <li>2-4 tbsp water</li>
                </ul>
                <ul id='right-list'>
                    <li>1 1/2 cups heavy cream</li>
                    <li>1/3 granulated sugar</li>
                    <li>2 egg yolks</li>
                    <li>1 lemon, juiced</li>
                    <li>2 tbsp butter</li>
                    <li>1 cup honey roasted pecans, roughly chopped</li>
                </ul>
                </div>
            </section>
        )
    }
}
export default Ingredients;