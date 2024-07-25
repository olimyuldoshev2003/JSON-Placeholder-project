import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

// Define a type for the slice state
interface IPageState {
  postById: any;
  commentById: any;
  albumById: any;
  photoById: any;
  todoById: any;
  userById: any;
}

// Define the initial state using that type
const initialState: IPageState = {
  postById: [],
  commentById: [],
  albumById: [],
  photoById: [],
  todoById: [],
  userById: [],
};

export const pageSlice = createSlice({
  name: "pageState",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPostById(state: IPageState, action: PayloadAction<any>) {
      state.postById = action.payload;
    },
    setCommentById(state: IPageState, action: PayloadAction<any>) {
      state.commentById = action.payload;
    },
    setAlbumById(state: IPageState, action: PayloadAction<any>) {
      state.albumById = action.payload;
    },
    setPhotoById(state: IPageState, action: PayloadAction<any>) {
      state.photoById = action.payload;
    },
    setTodoById(state: IPageState, action: PayloadAction<any>) {
      state.todoById = action.payload;
    },
    setUserById(state: IPageState, action: PayloadAction<any>) {
      state.userById = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setPostById, setCommentById, setAlbumById, setPhotoById, setTodoById, setUserById } = pageSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.pageState;

export default pageSlice.reducer;
