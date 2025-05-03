import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: localStorage.getItem('username') || '',
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
      localStorage.setItem('username', action.payload);
    },
    clearUsername: (state) => {
      state.username = '';
      localStorage.removeItem('username');
    },
  },
});

export const { setUsername, clearUsername } = userSlice.actions;
export default userSlice.reducer;