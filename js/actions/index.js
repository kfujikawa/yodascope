export const FETCH_HOROSCOPE_SUCCESS = 'FETCH_HOROSCOPE_SUCCESS';
export const FETCH_HOROSCOPE_ERROR = 'FETCH_HOROSCOPE_ERROR';
export const FETCH_HOROSCOPE = 'FETCH_HOROSCOPE';
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

export const fetchYodaSuccess = (horoscope) => ({
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
  console.log('I come from fetch horoscope');
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

export const yodaSpeak = (sign, horoscope) => ({
  type: YODA_SPEAK,
  sign,
  horoscope
});