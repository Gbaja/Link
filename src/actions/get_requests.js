import axios from "axios";

import {
  ADD_ERROR,
  UNAUTH_USER,
  FETCH_DIRECTORY,
  FETCH_PROFILE,
  FETCH_UNIVERSITIES,
  FETCH_PENDING,
  FETCH_PENDING_REQUESTS_MENTOR,
  FETCH_PENDING_REQUESTS_MENTEE,
  REMOVE_PENDING_REQUEST
} from "./types";

export const logOut = callback => {
  return dispatch => {
    axios.get("/api/logout").then(() => {
      callback();
      dispatch({
        type: UNAUTH_USER,
        payload: false
      });
    });
  };
};

export const fetchDirectory = (pageNum, accountType, uni, filters) => {
  console.log("FETCH GET REQUEST: ", filters);
  return dispatch => {
    return axios
      .get(`/api/directory/${pageNum}/${accountType}/${uni}`, {
        params: filters
      })
      .then(response => {
        dispatch({
          type: FETCH_DIRECTORY,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("FETCH MENTORS ERR: ", err);
        dispatch({
          type: ADD_ERROR,
          payload: {
            type: "error",
            message:
              "There was an error on our side. Please try again letter or contact a member of out team for assistance."
          }
        });
      });
  };
};

export const fetchProfile = (id, accountType) => {
  return dispatch => {
    return axios
      .get(`/api/profile/${id}/${accountType}`)
      .then(response => {
        dispatch({
          type: FETCH_PROFILE,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("FETCH PROFILE ERR: ", err);
        dispatch({
          type: ADD_ERROR,
          payload: {
            type: "error",
            message:
              "There was an error on our side. Please try again letter or contact a member of out team for assistance."
          }
        });
      });
  };
};

export const fetchUniversities = () => {
  return dispatch => {
    return axios
      .get("api/allUni")
      .then(response => {
        dispatch({
          type: FETCH_UNIVERSITIES,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("FETCH PROFILE ERR: ", err);
        dispatch({
          type: ADD_ERROR,
          payload: {
            type: "error",
            message:
              "There was an error on our side. Please try again letter or contact a member of out team for assistance."
          }
        });
      });
  };
};

export const fetchPending = uniName => {
  return dispatch => {
    return axios
      .get(`/api/pending/${uniName}`)
      .then(response => {
        dispatch({
          type: FETCH_PENDING,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("FETCH PENDING ERR: ", err);
        dispatch({
          type: ADD_ERROR,
          payload: {
            type: "error",
            message:
              "There was an error on our side. Please try again letter or contact a member of out team for assistance."
          }
        });
      });
  };
};

export const fetchMentorPendingRequests = mentorId => {
  return dispatch => {
    axios
      .get("/api/pendingRequestsMentor", {
        params: { MentorRegistrationId: mentorId }
      })
      .then(response => {
        dispatch({
          type: FETCH_PENDING_REQUESTS_MENTOR,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("FETCH PENDING REQUEST ERR: ", err);
        dispatch({
          type: ADD_ERROR,
          payload: {
            type: "error",
            message:
              "There was an error on our side. Please try again letter or contact a member of out team for assistance."
          }
        });
      });
  };
};

export const fetchMenteePendingRequests = menteeId => {
  return dispatch => {
    axios
      .get("/api/pendingRequestsMentee", {
        params: { MenteeRegistrationId: menteeId }
      })
      .then(response => {
        dispatch({
          type: FETCH_PENDING_REQUESTS_MENTEE,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("FETCH PENDING REQUEST ERR: ", err);
        dispatch({
          type: ADD_ERROR,
          payload: {
            type: "error",
            message:
              "There was an error on our side. Please try again letter or contact a member of out team for assistance."
          }
        });
      });
  };
};

export const removePending = () => {
  return {
    type: REMOVE_PENDING_REQUEST
  };
};
