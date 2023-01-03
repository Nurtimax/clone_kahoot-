import { configureStore } from "@reduxjs/toolkit";
import createTestSlice from "./slices/createTestSlice/createTestSlice";
import { createTestSliceApi } from "./slices/createTestSlice/createTestSlice.api";
import toggleSlice from "./slices/toggleSlices";

export const store = configureStore({
  reducer: {
    createTest: createTestSlice.reducer,
    toggles: toggleSlice.reducer,
    [createTestSliceApi.reducerPath]: createTestSliceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createTestSliceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
