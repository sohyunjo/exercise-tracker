import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class ExercisesList extends Component{
    constructor(props){
        super(props)

        this.deleteExercise = this.deleteExercise.bind(this)
    }
    render() {
        return (
            <div>exercises list </div>
        )
    }
}