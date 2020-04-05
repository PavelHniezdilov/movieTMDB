const movieUrl = "https://api.themoviedb.org/3/";
const API_KEY = "441a253e3e631d3ab8b14cfff5df9f72";

export function getSearchMovie(name) {
  return callApi(`${movieUrl}&s=${name}`);
}

// Private functions

function callApi(url = { method: "get" }) {
  return fetch(url)
    .then(res => {
      // console.log(res)
      return res.text();
    })
    .then(text => {
      // debugger
      if (text === "OK") {
        return [];
      }
      if (text.length === 0) {
        return [];
      }
      return JSON.parse(text);
    });
}
