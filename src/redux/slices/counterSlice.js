import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
}

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    incCounter: (state, action) => {
      // state.counter = action.payload.counter
      return { ...state, counter: action.payload }
    },
  },
})

export const { incCounter } = counterSlice.actions
export const selectCounter = state => state.counter
export default counterSlice.reducer
