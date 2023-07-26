import { 
    SET_IS_FETCHING_CAT, 
    GET_CAT_FACT_SUCCESS, 
    SET_IS_FETCHING_DOG,
    GET_DOG_PHOTO_SUCCESS,
    SET_IS_FETCHING_JOKE,
    GET_JOKE_SUCCESS_SETUP,
    GET_JOKE_SUCCESS_PUNCHLINE,
    SET_SHOW_PUNCHLINE,
    SET_ZIP_CODE_INPUT,
    GET_LAT_LONG,
    GET_LAT_LONG_SUCCESS,
    SET_ZIP_CODE  } from "../actions";


const initialState = {
    catFact: '',
    dogImage: '',
    currentJokePunchline: '',
    currentJokeSetup: '',
    zipCode: "",
    longitude: "",
    latitude: "",
    isFetchingCat: false,
    IsFetchingDog: false,
    isFetchingZip: false,
    isFetchingJoke: false,
    showPunchline: false,
    error: '',
    zipCodeInput: '',
    zipCodeObject: {}

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FETCHING_CAT:
            return {...state, isFetchingCat: action.payload}
        case GET_CAT_FACT_SUCCESS:
            return {...state, isFetchingCat: false, catFact: action.payload}
        case SET_IS_FETCHING_DOG:
            return {...state, IsFetchingDog: action.payload}
        case GET_DOG_PHOTO_SUCCESS:
            return {...state, IsFetchingDog: false, dogImage: action.payload}
        case SET_IS_FETCHING_JOKE:
            return {...state, isFetchingJoke: action.payload}
        case GET_JOKE_SUCCESS_SETUP:
            return {...state, isFetchingJoke: false, currentJokeSetup: action.payload}
        case GET_JOKE_SUCCESS_PUNCHLINE:
            return {...state, currentJokePunchline: action.payload}
        case SET_SHOW_PUNCHLINE:
            return {...state, showPunchline: action.payload}
        case SET_ZIP_CODE_INPUT:
            return {...state, zipCodeInput: action.payload}
        case GET_LAT_LONG_SUCCESS:
            return {...state, zipCodeObject: action.payload}
        case SET_ZIP_CODE:
            return {...state, zipCode: action.payload}
        default:
            return state;
    }
}