import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setZipCodeInput, getLatLong } from "../actions";


function ZipCode(props) {
    return (
        <div className="component zip-component">

            <div className="zipCode component-title-div">
                <h2 className="component-title zip-code-title">
                    Would you like to know the longitude and latitude of a given zip code? Of course you wouldn't! But you should do it anyway...
                </h2>
            </div>
            <div>
                <input 
                    type='text'
                    placeholder="Enter a Zip Code"
                    value={props.input}
                    onChange={(e) => props.setZipCodeInput(e.target.value)}
                    
                />
                <button onClick={() => props.getLatLong(props.input)}>Submit</button>
                <h3>Zip Code: {props.zipCode}</h3>
                <h3>Place Name: {props.city}</h3>
                <h3>Longitude: {props.longitude}</h3>
                <h3>Latitude: {props.latitude}</h3>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        zipCode: state.zipCode,
        longitude: state.zipCodeObject.longitude,
        latitude: state.zipCodeObject.latitude,
        input: state.zipCodeInput,
        city: state.zipCodeObject['place name']
    }
}

export default connect(mapStateToProps, {setZipCodeInput, getLatLong})(ZipCode);