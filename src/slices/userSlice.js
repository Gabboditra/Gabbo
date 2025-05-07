import { createSlice } from '@reduxjs/toolkit';

// Slice to control user login state
const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: localStorage.getItem('username') || '',
  },
  reducers: {
    // Set username and store it in localStorage
    setUsername: (state, action) => {
      state.username = action.payload;
      localStorage.setItem('username', action.payload);
    },
    // Clear username from state and localStorage
    clearUsername: (state) => {
      state.username = '';
      localStorage.removeItem('username');
    },
  },
});

export const { setUsername, clearUsername } = userSlice.actions;
export default userSlice.reducer;
