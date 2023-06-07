import React, { Component } from 'react'
import { Films } from '../shared/ListOfFilms'
import FilmsPresentation from './FilmsPresentation'
import Slider from './Slider'

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            films: Films,
        };
    }
    render() {
        return (
            <>
                <Slider films={this.state.films} />
                <FilmsPresentation films={this.state.films} />
            </>
        )
    }
}
