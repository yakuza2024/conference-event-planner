import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './eventSlice.js'

export const store = configureStore({
  reducer: {
    event: eventReducer,
  },
})
