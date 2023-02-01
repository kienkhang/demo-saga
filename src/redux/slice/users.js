import { createSlice } from "@reduxjs/toolkit";
const userStore = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    // Execute Saga
    getUsers: () => {},
    addUsers: () => {},
    deleteUsers: () => {},

    // Change State
    setUsers: (state, action) => {
      return {
        ...state,
        users: action.payload,
      };
    },
  },
});

// Action
export const { getUsers, setUsers, addUsers, deleteUsers } = userStore.actions;
//Reducer
export default userStore.reducer;
