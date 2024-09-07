import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  students: [],
  searchQuery: "",
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addStudent, setSearchQuery } = studentSlice.actions;

const store = configureStore({
  reducer: {
    students: studentSlice.reducer,
  },
});

export default store;
