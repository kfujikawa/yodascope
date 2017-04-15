export const FETCH_HOROSCOPE_SUCCESS = 'FETCH_HOROSCOPE_SUCCESS';
export const FETCH_HOROSCOPE_ERROR= 'FETCH_HOROSCOPE_ERROR';
export const FETCH_HOROSCOPE= 'FETCH_HOROSCOPE';

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

export const fetchHoroscope = sign => dispatch => {
    const url = `http://sandipbgt.com/theastrologer/api/horoscope/${sign}/today`;
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => response.json())
    .then(data =>
        dispatch(fetchHoroscopeSuccess(sign, data.horoscope))
    )
    .catch(error =>
        dispatch(fetchDescriptionError(sign, error))
    );
};

