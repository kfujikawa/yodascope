export const FETCH_HOROSCOPE_SUCCESS = 'FETCH_HOROSCOPE_SUCCESS';
export const FETCH_HOROSCOPE_ERROR = 'FETCH_HOROSCOPE_ERROR';
export const FETCH_HOROSCOPE = 'FETCH_HOROSCOPE';

export const fetchHoroscopeSuccess = (horoscope) => ({
  type: FETCH_HOROSCOPE_SUCCESS,
  horoscope
});

export const fetchHoroscopeError = (error) => ({
  type: FETCH_HOROSCOPE_ERROR,
  error
});

export const fetchHoroscope = sign => {
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
     .then(horoscope_data => {
       const url = `http://api.funtranslations.com/translate/yoda.json?api_key=y6C_2a3FVqfNmz_aHoCK9weF&text=${horoscope_data.horoscope}`;
       return fetch(url)
         .then(response => {
           if (!response.ok) {
             const error = new Error(response.statusText);
             error.response = response;
             throw error;
           }
           return response.json();
         })
         .then(translated_data => {
           return dispatch(
             fetchHoroscopeSuccess(translated_data.contents.translated)
           );
         })
         .catch(error => {
           return dispatch(fetchHoroscopeError(error));
         });

     })
     .catch(error => {
       return dispatch(fetchHoroscopeError(error));
     });
 };
};