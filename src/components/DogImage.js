import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getDogPhoto } from "../actions";



function DogImage(props) {
    if (props.isFetchingDog) {
        return <h2>Dog Incoming</h2>
    }
    return (
        <div className="component dog-component">
            <div>
                <div className="dog-image">
                    <div className="component-title-div">
                        <h2 className="component-title">Need a doggy-buddy? Press that button!</h2>
                    </div>
                    
                </div>
                <div className="doggy-div">
                <button id='doggy-button' onClick={() => props.getDogPhoto()}>{props.dogImage ? 'Show me another dog, please' : 'Show me a dog, please'}</button>
                <img id='doggy-photo' src={props.dogImage} />
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        dogImage: state.dogImage,
        isFetchingDog: state.isFetchingDog
    }
}

export default connect(mapStateToProps, {getDogPhoto})(DogImage);