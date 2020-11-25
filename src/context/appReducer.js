export default (state, action) => {
  switch (action.type) {
    case 'SET_DATA_RESULT':
      return {
        ...state,
        dataResult: [action.payload],
      };
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload,
      };
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};
