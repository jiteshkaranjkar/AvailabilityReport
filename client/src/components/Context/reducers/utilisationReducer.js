import {FETCH_UTILISATION, FETCH_UTILISATION_INPROGRESS } from '../actions/types';

const initialState = {
    items:[],
    item:{} 
}

export default (state = initialState, action) =>{
    switch(action.type){
        case FETCH_UTILISATION_INPROGRESS :
        console.log("Fetching Utilisation Report IN progress");
            return {
                ...state,
                items: action.payload   
            }
            case FETCH_UTILISATION :
            console.log("Fetching Utilisation Report complete");
            return {
                ...state,
                items: action.payload
            }
    default:
        return state;
    }
}