import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    shipment: '',
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.title === item.title);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    setShipment: (state, action) => {
      state.shipment = action.payload;
    },
  },
});

export const { addItem, setShipment } = cartSlice.actions;
export default cartSlice.reducer;
