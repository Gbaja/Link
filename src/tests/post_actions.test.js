// import { mockStore, mockAxios } from "../test-support";
// import { logIn } from "../actions/post_requests";
// import { AUTH_USER } from "../actions/types";

// describe("Log in test", () => {
//   const data = {
//     email: "gbajaf@yahoo.co.uk",
//     password: process.env.PASSWORD
//   };
//   const mockLogin = data =>
//     mockAxios.onPost("/api/signupMentor", data).reply(200);

//   const store = mockStore();
//   const callback = data => {
//     console.log(data);
//   };
//   mockLogin(data);

//   store.dispatch(logIn(data, callback)).then(() => {
//     expect(store.getActions()).toEqual([
//       {
//         type: AUTH_USER,
//         payload: {}
//       }
//     ]);
//   });
// });
