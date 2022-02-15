import { configureStore } from "@reduxjs/toolkit";
import bucketReducer from "./modules/bucket";


import rootSaga from "../middleware";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
  reducer: {
    bucket: bucketReducer,
  },

  middleware: [sagaMiddleware],
  devTools: true,
});


sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;