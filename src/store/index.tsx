import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import productSlice from "../features/product/productSlice";
import commentSlice from "@/features/comment/comment";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  [counterSlice.reducerPath]: counterSlice.reducer,
  [productSlice.reducerPath]: productSlice.reducer,
  [commentSlice.reducerPath]: commentSlice.reducer,
});

const persistConfig = {
  key: "root",
 storage
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({serializableCheck: false}).concat(commentSlice.middleware);
  },
});
console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀:", store.getState());
const persistor = persistStore(store);
setupListeners(store.dispatch);
export { store, persistor };
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
