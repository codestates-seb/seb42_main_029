const initialState = {
  isLogin: false,
  role: "",
};

export default function userReducer(state = initialState, action) {
  // eslint-disable-next-line
  {
    //! 로그인 상태
    if (action.type === "USER_IS_LOGIN")
      // 로그인
      return {
        ...state,
        isLogin: true,
      };
    else if (action.type === "USER_IS_LOGOUT")
      // 로그아웃
      return {
        ...state,
        isLogin: false,
        userId: undefined,
        name: undefined,
        sellerId: undefined,
        adminId: undefined,
        role: undefined,
      };
    else if (action.type === "USER_ROLE")
      return {
        ...state,
        role: action.payload,
      };
    else if (action.type === "USER_INFORMATION")
      // 유저정보 저장
      // console.log(action.type);
      // console.log(action.payload);
      return {
        ...state,
        userId: action.payload.userId,
        name: action.payload.name,
      };
    else if (action.type === "SELLER_INFORMATION")
      // 유저정보 저장
      return {
        ...state,
        sellerId: action.payload.sellerId,
      };
    else if (action.type === "ADMIN_INFORMATION")
      // 유저정보 저장
      return {
        ...state,
        adminId: action.payload.adminId,
      };
    else {
      //해당없으면 그냥 반환
      return state;
    }
  }
}
