import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinUser: (state, action) => {
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload,
      };
    },
    updateProfile: (state, action) => {
      return {
        ...state,
        currentUser: {
          ...state.currentUser?.profile,
          ...action.payload,
        },
      };
    },
    signoutUser: () => {
      return {
        ...initialState,
      };
    },
  },
});

export const { signinUser, signoutUser, updateProfile } = userSlice.actions;
export default userSlice.reducer;
