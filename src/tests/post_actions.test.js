// import { mockStore, mockAxios } from "../test-support";
// import { logIn } from "../actions/post_requests";
// import { AUTH_USER } from "../actions/types";

// describe("Log in test", () => {
//   const data = {
//     email: "gbajaf@yahoo.co.uk",
//     password: "Asdfghjkl2"
//   };
//   const mockSignUp = () =>
//     mockAxios.onPost("/api/signupMentor", data).reply(200);

//   const store = mockStore();
//   const callback = data => {
//     console.log(data);
//   };
//   mockSignUp();

//   store.dispatch(logIn(data, callback)).then(() => {
//     expect(store.getActions()).toEqual([
//       {
//         type: AUTH_USER,
//         payload: {}
//       }
//     ]);
//   });
// });
