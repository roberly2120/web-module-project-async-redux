import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getJoke, setShowPunchline } from "../actions";


function RandomJoke (props) {
    if(props.isFetchingJoke) {
        return <h2>Get Ready to Laugh...</h2>
    }
    return (
        <div className="component joke-component">
            <div>
                <div className="joke-div">
                    <div className="component-title-div">
                        <h2 className="component-title">Jokes On-Demand</h2>
                    </div>
                    <h3>{props.currentJokeSetup}</h3>
                    <h3>{props.showPunchline ? props.currentJokePunchline : ''}</h3>
                </div>
                <button className="joke-button" onClick={() => props.getJoke()}>
                     Press for a {props.currentJokePunchline ? 'new' : ''} Joke
                </button>
                    {!props.showPunchline && props.currentJokeSetup ? <button className="joke-button" onClick={() => props.setShowPunchline(true)}>Show Punchline</button> : ''}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentJokeSetup: state.currentJokeSetup,
        currentJokePunchline: state.currentJokePunchline,
        isFetchingJoke: state.isFetchingJoke,
        showPunchline: state.showPunchline,
    }
}

export default connect(mapStateToProps, {getJoke, setShowPunchline})(RandomJoke);