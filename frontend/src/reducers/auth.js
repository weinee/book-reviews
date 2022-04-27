import { AUTH, USER_LOGOUT } from "../constants/userConstants";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return {
        ...state,
        authData: action?.data,
      };

    case USER_LOGOUT:
      localStorage.clear();

      return {
        ...state,
        authData: null,
      };
    default:
      return state;
  }
};

export default authReducer;
