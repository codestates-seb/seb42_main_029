const initialState = {
  isLogin: false,
  userId: "초기값 userId",
  id: "초기값 id",
  name: "초기값 name",
};

export default function userReducer(state = initialState, action) {
  // eslint-disable-next-line no-lone-blocks
  {
    if (action.type === "USER_LOGIN")
      return {
        ...state,
        isLogin: true,
        userId: action.payload.userId,
        id: action.payload.id,
        name: action.payload.name,
      };
    else if (action.type === "USER_LOGOUT")
      return {
        ...state,
        isLogin: false,
        userId: "",
        id: "",
        name: "",
      };
      else if (action.type === "USER_ISLOGIN")
      return {
        ...state,
        isLogin: true,
      };
      else if (action.type === "USER_ISLOGOUT")
      return {
        ...state,
        isLogin: false,
      };
    else {
      return state;
    } //해당없으면 그냥 반환
  }
}
