import {FETCH_UTILISATION} from './types';

export function fetchUtilisation(){
    console.log("Fetching Utilisation 1");
    return (dispatch) => {
        dispatch(requestPosts())
        return fetch('/excel/util')
        .then(res => res.json())
        .then(data => dispatch({
                type: FETCH_UTILISATION,
                payload:data//.filter(isEligible)
            }));
    }
}

function isEligible(value){
    if(value !== null || value !== undefined || value !== 0 || value !== ""){
        return value;
    }
}

function requestPosts() {
    return {
        type: FETCH_UTILISATION
    }
}