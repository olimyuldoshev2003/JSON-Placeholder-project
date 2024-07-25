import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { getOnly5Posts, getOnly5Comments, getOnly5Albums, getOnly5Photos, getOnly5Todos, getOnly5Users } from "../../api/homeApi";

// Define a type for the slice state
interface IHomeState {
  only5Posts: any;
  only5Comments: any;
  only5Albums: any;
  only5Photos: any;
  only5Todos: any;
  only5Users: any;

}

// Define the initial state using that type
const initialState: IHomeState = {
  only5Posts: [],
  only5Comments: [],
  only5Albums: [],
  only5Photos: [],
  only5Todos: [],
  only5Users: [],
  
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
    builder.addCase(getOnly5Comments.fulfilled, (state: IHomeState, action: PayloadAction<any>) => {
      state.only5Comments = action.payload;         
    })
    builder.addCase(getOnly5Albums.fulfilled, (state: IHomeState, action: PayloadAction<any>) => {
      state.only5Albums = action.payload;      
    })
    builder.addCase(getOnly5Photos.fulfilled, (state: IHomeState, action: PayloadAction<any>) => {
      state.only5Photos = action.payload;      
    })
    builder.addCase(getOnly5Todos.fulfilled, (state: IHomeState, action: PayloadAction<any>) => {
      state.only5Todos = action.payload;      
    })
    builder.addCase(getOnly5Users.fulfilled, (state: IHomeState, action: PayloadAction<any>) => {
      state.only5Users = action.payload;      
    })
  }
});

export const { } = homeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.homeState;

export default homeSlice.reducer;
