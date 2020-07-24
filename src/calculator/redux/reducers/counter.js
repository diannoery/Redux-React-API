const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TAMBAH":
      return {
        ...state,
        counter: Number(action.angka1) + Number(action.angka2),
      };
    case "KURANG":
      return {
        ...state,
        counter: Number(action.angka1) - Number(action.angka2),
      };
    case "KALI":
      return {
        ...state,
        counter: Number(action.angka1) * Number(action.angka2),
      };
    case "BAGI":
      return {
        ...state,
        counter: Number(action.angka1) / Number(action.angka2),
      };
    default:
      return state;
  }
};

export default reducer;
