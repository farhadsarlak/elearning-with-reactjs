import {createStore,applyMiddleware,compose} from "redux";
import logger from 'redux-logger';
import {persistStore} from "redux-persist";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import {getAllCourses} from "./courses/coursesActions";

const middleWares = [thunk];

if(process.env.NODE_ENV === 'development'){
    middleWares.push(logger);
}

const store = createStore(rootReducer,compose(applyMiddleware(...middleWares)));
const persistor = persistStore(store);

store.dispatch(getAllCourses());

export {store,persistor}
