import { configureStore } from "@reduxjs/toolkit";
import homeState from "../reducers/homeState/homeState";
import pageState from "../reducers/pageState/pageState";
// ...

export const store = configureStore({
  reducer: {
    homeState,
    pageState,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
