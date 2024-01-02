import axios from "../api/axios";
import * as types from "./types";
import { useQuery } from "react-query";

const login = (email, password) => async (dispatch) => {
  let el = [];

  try {
    dispatch({
      type: types.USER_LOGIN_REQUEST,
    });

    const configs = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post("/login", { email, password }, configs)
      .then((response) => {
        console.log(response);
        localStorage.setItem(
          "userInfo",
          JSON.stringify(response.data.token.refreshToken)
        );
        dispatch({
          type: types.USER_LOGIN_SUCCESS,
          payload: response.data,
        });
        dispatch({
          type: types.ALERT_SUCCESS,
          payload: {
            text: "Успешно авторизован",
          },
        });
      })
      .catch(function (error) {
        console.log();
        if (error) {
          dispatch({
            type: types.USER_LOGIN_FAIL,
            payload: {
              text: error.response.data.message,
              state: true,
              code: error.status,
            },
          });
          dispatch({
            type: types.ALERT_ERROR,
            payload: {
              text: error.response.data.message,
            },
          });

          console.log(error.response.data.message);
        }
      });
  } catch (error) {}
};

export const getNewAccessToken = () => async (dispatch) => {
  if (localStorage.getItem("userInfo")) {
    await axios
      .post("/refresh", {
        refreshToken: localStorage.getItem("userInfo").replace(/"/g, ""),
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: types.USER_LOGIN_SUCCESS,
            payload: {
              token: {
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken,
              },
              user: response.data.user,
            },
          });

          localStorage.setItem(
            "userInfo",
            JSON.stringify(response.data.refreshToken)
          );
        }

        if (response.status === 401) {
          console.log(response);

          dispatch({
            type: types.USER_REGISTER_FAIL,
            payload: response.data,
          });

          localStorage.setItem(
            "userInfo",
            JSON.stringify(response.data.refreshToken)
          );
        }
      })
      .catch((error) => {
        if (error === "Unauthorized") {
          console.log("Unauthorized. Please log in.");
        } else {
          console.error("An error occurred:", error);
        }
      });
  }
};

export const sendActivationMail = (mail) => async (dispatch) => {
  try {
    dispatch({
      type: types.USER_LOGIN_REQUEST,
    });

    const configs = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post(
        "/sendActivationMail",
        {
          email: mail,
        },
        configs
      )
      .then((response) => {
        console.log(response);

        dispatch({
          type: types.ALERT_SUCCESS,
          payload: {
            text: "Успешно отправлено",
          },
        });
      })
      .catch(function (error) {
        console.log(error);
        if (error) {
          dispatch({
            type: types.ALERT_ERROR,
            payload: {
              text: error.response.data.message,
            },
          });

          console.log(error.response.data.message);
        }
      });
  } catch (error) {}
};
export const logout = () => async (dispatch) => {
  dispatch({
    type: types.USER_LOGOUT,
    playload: [],
  });
  dispatch({
    type: types.ALERT_INFO,
    payload: {
      text: "Успешно вышли из аккаунта",
    },
  });
};

export const registration =
  (email, password, name, lastname) => async (dispatch) => {
    try {
      dispatch({
        type: types.USER_REGISTER_REQUEST,
      });

      const configs = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios
        .post("/registration", { email, password, name, lastname }, configs)
        .then((response) => {
          console.log(response);
          localStorage.setItem(
            "userInfo",
            JSON.stringify(response.data.refreshToken)
          );
          dispatch({
            type: types.USER_LOGIN_SUCCESS,
            payload: response.data,
          });
          dispatch({
            type: types.ALERT_SUCCESS,
            payload: {
              text: "Успешно авторизован",
            },
          });
        })
        .catch(function (error) {
          console.log();
          if (error) {
            dispatch({
              type: types.USER_LOGIN_FAIL,
              payload: {
                text: error.response.data.message,
                state: true,
                code: error.status,
              },
            });
            dispatch({
              type: types.ALERT_ERROR,
              payload: {
                text: error.response.data.message,
              },
            });

            console.log(error.response.data.message);
          }
        });
    } catch (error) {}
  };

export default login;
