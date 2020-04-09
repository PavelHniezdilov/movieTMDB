import Config from "react-native-config";

export function getPreviewList(role) {
  return callApi(
    `${Config.MOVIE_BASE_URL}/movie/${role}?api_key=${Config.API_KEY}`
  );
}

export function getMoviesList(role, page) {
  return callApi(
    `${Config.MOVIE_BASE_URL}/movie/${role}?api_key=${
      Config.API_KEY
    }&page=${page}`
  );
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
