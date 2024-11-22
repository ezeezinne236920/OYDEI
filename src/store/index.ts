import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import paymentOptionSlice from "./slice/payment-option-slice"; 
import userInputSlice from "./slice/input-slice";
import themeSlice from "./slice/theme-slice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import filteredDataSlice from "./slice/filter-slice";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
  userInput: userInputSlice,
 
  paymentOption: paymentOptionSlice,
  filteredData: filteredDataSlice,
  themeSlice: themeSlice,
});
const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

// Configuration for Redux Persist
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["other", "quickSell", "header", "Payment"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

// Create a persistor object to persist the store
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// export { store, persistor };
setupListeners(store.dispatch);
