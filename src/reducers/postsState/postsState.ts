import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

// Define a type for the slice state
interface IPostsState {
    postById:any
}

// Define the initial state using that type
const initialState: IPostsState = {
  postById: [],
};

export const postsSlice = createSlice({
  name: "postsState",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
    reducers: {
        setPostById(state: IPostsState, action:PayloadAction<any>) {
            state.postById = action.payload
      }
  },
  extraReducers: (builder) => {
    
  },
});

export const {setPostById} = postsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.homeState;

export default postsSlice.reducer;
