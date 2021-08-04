import React, { Component } from "react";
import './styles.css'

import pizzaPic from './assets/choco-pizza.png'
import print from './assets/print-icon.png'

class Main extends Component {
    render() {
        return (
            <main>
                <section className='top-section'/>
                <section id='pizza'>
                    <div>
                        <h1>Chocolate Pizza</h1>
                        <h2>Posted December 15th 2013</h2>
                    </div>
                    <div>
                        <h3><img src={ print } alt='Print this recipe' />Print</h3>
                    </div>
                    <img src={ pizzaPic } alt='chocolate pizza' />
                    <div>
                        <ul>
                            <li>For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and left cool completely.</li>
                            <li>Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set picture in the fridge and wait until the fix mixture is cooled.</li>
                            <li>Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thickens for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into pyrex dish or glass Tupperware. Freeze for at least two hours before serving.</li>
                        </ul>
                    </div>
                </section>
            </main>
        )
    }
}
export default Main