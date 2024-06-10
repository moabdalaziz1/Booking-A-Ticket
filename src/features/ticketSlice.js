import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ticketData: [],
  ticketEdit: {
    id: 0,
    from: '',
    to: '',
    date: '',
    guests: '',
    class: '',
  },
  isEditClicked: false,
};

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    booked: (state, action) => {
      state.ticketData.push(action.payload);
    },
    removeTicket: (state, action) => {
      const ticketId = action.payload;
      state.ticketData = state.ticketData.filter(
        (item) => item.id !== ticketId
      );
    },
    editTicket: (state, action) => {
      const ticketId = action.payload;
      const ticketItem = state.ticketData.find((item) => item.id === ticketId);
      state.ticketEdit = ticketItem;
      state.isEditClicked = !state.isEditClicked;
    },
  },
});

export default ticketSlice.reducer;
export const { booked, removeTicket, editTicket } = ticketSlice.actions;
