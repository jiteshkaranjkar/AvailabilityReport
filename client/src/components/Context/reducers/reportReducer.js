import {FETCH_REPORT, FETCH_REPORT_INPROGRESS } from '../actions/types';

const initialState = {
    items:[],
    item:{} 
}

export default (state = initialState, action) =>{
    switch(action.type){
        case FETCH_REPORT_INPROGRESS :
        console.log("Fetching Report IN progress");
            return {
                ...state,
                items: action.payload   
            }
            case FETCH_REPORT :
            console.log("Fetching Report complete");
            return {
                ...state,
                items: action.payload
            }
    default:
        return state;
    }
}