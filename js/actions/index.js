export const GET_SIGN = 'GET_SIGN';
export const CHANGE_SIGN = 'CHANGE_SIGN';

export const getSign = () => ({
  type: GET_SIGN,
  sign
});

export const changeSign = () => ({
  type: CHANGE_SIGN,
  sign
});