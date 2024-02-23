import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { getOnly5Posts } from "../../api/homeApi";

// Define a type for the slice state
interface IHomeState {
  only5Posts: any;

}

// Define the initial state using that type
const initialState: IHomeState = {
  only5Posts:[],
};

export const homeSlice = createSlice({
  name: "homeState",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(getOnly5Posts.fulfilled, (state: IHomeState, action: PayloadAction<any>) => {
      state.only5Posts = action.payload;      
    })
  }
});

export const { } = homeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.homeState;

export default homeSlice.reducer;
