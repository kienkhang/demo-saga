import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
import usersReducer from "./slice/users";
// import rootSaga from "./saga/rootsaga";
// Create sagaMiddleWare
// const sagaMiddleWare = createSagaMiddleware();
// Create Store
const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  // middleware: (gDM) => gDM().concat(sagaMiddleWare),
});

// Run saga
// sagaMiddleWare.run(rootSaga);
export default store;
