import { createSlice } from "@reduxjs/toolkit";
let lastID = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    // actions => action handlers
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastID,
        name: action.payload.name,
      });
    },
  },
});

export const { projectAdded } = slice.actions;
export default slice.reducer;
