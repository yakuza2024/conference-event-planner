import { createSlice } from '@reduxjs/toolkit'

const eventSlice = createSlice({
  name: 'event',
  initialState: { quantities: {} },
  reducers: {
    setItemQuantity(state, action) {
      const { id, quantity } = action.payload
      state.quantities[id] = Math.max(0, Math.floor(Number(quantity) || 0))
    },
  },
})

export const { setItemQuantity } = eventSlice.actions
export default eventSlice.reducer
