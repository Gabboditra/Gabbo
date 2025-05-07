import { createSlice } from '@reduxjs/toolkit';

// Slice to manage cart state
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],     
    shipment: '',  
  },
  reducers: {
    // Add item to cart or increase quantity if it exists
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.title === item.title);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    // Set the shipment method (e.g., Standard, Express, etc.)
    setShipment: (state, action) => {
      state.shipment = action.payload;
    },
  },
});

export const { addItem, setShipment } = cartSlice.actions;
export default cartSlice.reducer;
