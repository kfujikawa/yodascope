export const FETCH_HOROSCOPE_SUCCESS = 'FETCH_HOROSCOPE_SUCCESS';
export const FETCH_HOROSCOPE_ERROR = 'FETCH_HOROSCOPE_ERROR';
export const FETCH_HOROSCOPE = 'FETCH_HOROSCOPE';
export const FETCH_YODA_SUCCESS = 'FETCH_YODA_SUCCESS';
export const FETCH_YODA_ERROR = 'FETCH_YODA_ERROR';
export const YODA_SPEAK = 'YODA_SPEAK';

export const fetchHoroscopeSuccess = (sign, horoscope) => ({
  type: FETCH_HOROSCOPE_SUCCESS,
  sign,
  horoscope
});

export const fetchDescriptionError = (sign, error) => ({
  type: FETCH_HOROSCOPE_ERROR,
  sign,
  error
});

export const fetchYodaSuccess = (horoscope, yodascope) => ({
  type: FETCH_YODA_SUCCESS,
  horoscope,
  yodascope
});

export const fetchYodaError = (horoscope, error) => ({
  type: FETCH_YODA_ERROR,
  horoscope,
  error
});

export const fetchHoroscope = sign => {
  // console.log('I come from fetch horoscope');
  return dispatch => {
    const url = `http://sandipbgt.com/theastrologer/api/horoscope/${sign}/today`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          const error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
        return response.json();
      })
      .then(data => {
        return dispatch(fetchHoroscopeSuccess(sign, data.horoscope));
      })
      .catch(error => {
        return dispatch(fetchDescriptionError(sign, error));
      });
  };
};

export const fetchYodascope = horoscope => {
  // console.log('I come from fetch yodascope');
  return dispatch => {
    const url = `http://api.funtranslations.com/translate/yoda.json?api_key=y6C_2a3FVqfNmz_aHoCK9weF&text=${horoscope}`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          const error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
        return(response.json());
      })
      .then(data => {
        // console.log(data.contents.translated);
        return dispatch(fetchYodaSuccess(horoscope, data.contents.translated));
      })
      .catch(error => {
        return dispatch(fetchYodaError(horoscope, error));
      });
  };
};