import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getCatFact } from "../actions";


function CatFact(props) {
    if (props.isFetchingCat) {
        return <h2>Loading Your Neat Cat Fact!!</h2>
    }
    return (
        <div className="component cat-component">
            <div>
                <div className="catFact">
                    <div className="component-title-div">
                        <h2 className="component-title">{props.catFact ? 'Press it Again to Learn Another Fact!' : 'Like Cats? Press the Button!'}</h2>
                    </div>

                </div>
                
                    <h3>{props.catFact}</h3>
                    <button onClick={() => props.getCatFact()}>{props.catFact ? 'Press for New Cat Fact' : 'Press for Cat Fact'}</button>
                
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        catFact: state.catFact,
        isFetchingCat: state.isFetchingCat
    }
}

export default connect(mapStateToProps, {getCatFact})(CatFact);