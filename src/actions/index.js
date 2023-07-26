import axios from "axios";
import { catFactURL, dogImageURL, jokesURL, zipCodeURL } from "../App";
// import { dogImageURL } from "../App";

export const GET_CAT_FACT = 'GET_CAT_FACT'
export const GET_CAT_FACT_SUCCESS = 'GET_CAT_FACT_SUCCESS'
export const SET_IS_FETCHING_CAT = 'SET_IS_FETCHING_CAT'

export const GET_DOG_PHOTO = 'GET_DOG_PHOTO'
export const GET_DOG_PHOTO_SUCCESS = 'GET_DOG_PHOTO_SUCCESS'
export const SET_IS_FETCHING_DOG = 'SET_IS_FETCHING_DOG'

export const GET_JOKE = 'GET_JOKE'
export const GET_JOKE_SUCCESS_SETUP = 'GET_JOKE_SUCCESS_SETUP'
export const GET_JOKE_SUCCESS_PUNCHLINE = 'GET_JOKE_SUCCESS_PUNCHLINE'
export const SET_IS_FETCHING_JOKE = 'SET_IS_FETCHING_JOKE'
export const SET_SHOW_PUNCHLINE ='SET_SHOW_PUNCHLINE'

export const SET_ZIP_CODE_INPUT = 'SET_ZIP_CODE_INPUT'
export const SET_IS_FETCHING_ZIP = 'SET_IS_FETCHING_ZIP'
export const SET_ZIP_CODE = 'SET_ZIP_CODE'
export const GET_LAT_LONG = 'GET_LAT_LONG'
export const GET_LAT_LONG_SUCCESS = 'GET_LAT_LONG_SUCCESS'

export const getCatFact = () => dispatch => {
    dispatch(setIsFetchingCat(true));
    axios.get(catFactURL)
        .then((res) => {
            const catFact = res.data.fact;
            dispatch(getCatFactSuccess(catFact))
        }).catch(err => console.error(err))
        return {type: GET_CAT_FACT, payload: {data: 'cat fact'}}
}
export const setIsFetchingCat = (isFetchingCat) => {
    return {type: SET_IS_FETCHING_CAT, payload: isFetchingCat}
}
export const getCatFactSuccess = (catFact) => {
    return {type: GET_CAT_FACT_SUCCESS, payload: catFact}
}


export const getDogPhoto = () => dispatch => {
    dispatch(setIsFetchingDog(true));
    axios.get(dogImageURL)
    .then((res) => {
        dispatch(getDogPhotoSuccess(res.data.message))
    }).catch(err => console.error(err))
    return {type: GET_DOG_PHOTO, payload: {data: 'dog photo'}}
}
export const setIsFetchingDog = (isFetchingDog) => {
    return {type: SET_IS_FETCHING_DOG, payload: isFetchingDog}
}
export const getDogPhotoSuccess = (dogPhoto) => {
    return {type: GET_DOG_PHOTO_SUCCESS, payload: dogPhoto}
}
export const getJoke = () => dispatch => {
    dispatch(setIsFetchingJoke(true));
    dispatch(setShowPunchline(false))
    axios.get(jokesURL)
    .then((res) => {
        dispatch(getJokeSuccessSetup(res.data.setup));
        dispatch(getJokeSuccessPunchline(res.data.punchline));
        console.log(res)
    }).catch((err) => console.error(err))
    return {type: GET_JOKE, payload: {data: 'I got that joke'}}
}
export const setIsFetchingJoke = (isFetchingJoke) => {
    return {type: SET_IS_FETCHING_JOKE, payload: isFetchingJoke}
}
export const getJokeSuccessSetup = (setup) => {
    return {type: GET_JOKE_SUCCESS_SETUP, payload: setup}
}
export const getJokeSuccessPunchline = (punchline) => {
    return {type: GET_JOKE_SUCCESS_PUNCHLINE, payload: punchline}
}
export const setShowPunchline = (boolean) => {
    return {type: SET_SHOW_PUNCHLINE, payload: boolean}
}
export const setZipCodeInput = (newZipCode) => {
    return {type: SET_ZIP_CODE_INPUT, payload: newZipCode}
}
export const setIsFetchingZip = (isFetchingZip) => {
    return {type: SET_IS_FETCHING_ZIP, payload: isFetchingZip}
}
export const setZipCode = (zipCode) => {
    return {type: SET_ZIP_CODE, payload: zipCode}
}
export const getLatLong = (zipCode) => dispatch => {
    dispatch(setIsFetchingZip(true));
    axios.get(`${zipCodeURL}${zipCode}`)
    .then(res => {
        dispatch(getLatLongSuccess(res.data.places[0]))
        dispatch(setZipCode(zipCode))
        console.log(res.data.places[0])
    }).catch(err => {console.error(err)})
    return {type: GET_LAT_LONG, payload: {data: 'lat-long'}}
}
export const getLatLongSuccess = (object) => {
    return {type: GET_LAT_LONG_SUCCESS, payload: object}
}