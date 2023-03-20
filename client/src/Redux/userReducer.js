const initialState = {
  isLogin: false,
};

export default function userReducer(state = initialState, action) {
  // 
  {
    //! 로그인 상태
    if (action.type === "USER_ISLOGIN")
      // 로그인
      return {
        ...state,
        isLogin: true,
      };
    else if (action.type === "USER_ISLOGOUT")
      // 로그아웃
      return {
        ...state,
        isLogin: false,
      };
    else {
      //해당없으면 그냥 반환
      return state;
    }
  }
}
