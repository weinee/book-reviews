import * as api from "../api/index.js";
import { AUTH } from "../constants/userConstants";

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({
      type: AUTH,
      data,
    });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const register = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);

    dispatch({
      type: AUTH,
      data,
    });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
