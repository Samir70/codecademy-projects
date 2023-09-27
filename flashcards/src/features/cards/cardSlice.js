import { createSlice } from '@reduxjs/toolkit';

export const selectCards = (state) => {
  return state.cardReducer.cards
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: {}
  },
  reducers: {
    addCard(state, action) {
      const { id, front, back } = action.payload
      state.cards[id] = {
        id, front, back
      }
    },

  }
});

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;