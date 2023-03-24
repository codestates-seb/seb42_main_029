const initialState = {
  isLogin: false,
};

export default function userReducer(state = initialState, action) {
  // eslint-disable-next-line
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
    else if (action.type === "USER_INFORMATION")
      // 유저정보 저장
      return {
        ...state,
        userId: action.payload.userId,
        role: action.payload.role,
      };
    else if (action.type === "SELLER_INFORMATION")
      // 유저정보 저장
      return {
        ...state,
        sellerId: action.payload.sellerId,
        role: action.payload.role,
      };
    else if (action.type === "ADMIN_INFORMATION")
      // 유저정보 저장
      return {
        ...state,
        adminId: action.payload.adminId,
        role: action.payload.role,
      };
    else {
      //해당없으면 그냥 반환
      return state;
    }
  }
}
