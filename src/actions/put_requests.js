import axios from "axios";

import { ADD_ERROR, UPDATE_PROFILE, ADD_SUCCESS } from "./types";

export const updateProfile = data => async dispatch => {
  if (data.imageUrl) {
    const formData = new FormData();
    formData.append("image", data.imageUrl);
    const config = {
      headers: {
        Authorization: "Client-ID 5973aa3ec117ac9"
      }
    };
    const imgrData = await axios.post(
      "https://api.imgur.com/3/image",
      formData,
      config
    );
    console.log("INSIDEL ", imgrData.data.data.link);
    data.imageUrl = imgrData.data.data.link;
  } else {
    data.imageUrl = null;
  }
  console.log("IMAGE URL: ", data.imageUrl);

  const updateData = await axios.put("/api/updateProfile", { ...data });

  dispatch({
    type: UPDATE_PROFILE,
    payload: updateData.data
  });
};

export const pendingAction = data => {
  return dispatch => {
    return axios
      .put("/api/pendingAction", data)
      .then(response => {
        dispatch({
          type: ADD_SUCCESS,
          payload: response.data
        });
        dispatch({
          type: "USER_ACCEPTED",
          payload: data.id
        });
      })
      .catch(err => {
        console.log("PENDING ACTION ERROR: ", err);
        dispatch({
          type: ADD_ERROR,
          payload:
            "There was an error on our side. Please try again letter or contact a member of out team for assistance."
        });
      });
  };
};
