import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface CounterState {
    value: number
  }
  
  // Define the initial state using that type
  const initialState: CounterState = {
    value: 0,
  }
  
  export const counterSlice = createSlice({
    name: 'sign',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1
      },
    },
  })
  
  export const { increment } = counterSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const selectCount = (state: RootState) => state.sign.value
  
  export default counterSlice.reducer