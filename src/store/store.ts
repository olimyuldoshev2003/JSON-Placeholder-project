import { configureStore } from "@reduxjs/toolkit";
import homeState from "../reducers/homeState/homeState";
import postsState from "../reducers/postsState/postsState";
// ...

export const store = configureStore({
  reducer: {
    homeState,
    postsState
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
