import { FETCH_REPORT } from "./types";

export function fetchReport() {
  console.log("Fetching Report 1");
  return dispatch => {
    dispatch(requestPosts());
    return fetch("/excel/report", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: FETCH_REPORT,
          payload: data.data.filter(isEligible)
        })
      );
  };
}

function isEligible(value) {
  if (value !== null || value !== undefined || value !== 0 || value !== "") {
    return value;
  }
}

function requestPosts() {
  return {
    type: FETCH_REPORT
  };
}
