const initialState = {
  meeting: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETMEETING":
      return { ...state, meeting: action.data };

    default:
      return state;
  }
};

export default reducer;
