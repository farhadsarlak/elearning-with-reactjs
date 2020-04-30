import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

import coursesReducer from './courses/coursesReducer';
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import courseReducer from "./singleCourse/courseReducer";
import sidebarReducer from "./sidebar/sidebarReducer";
import paginateReducer from "./siteSettings/paginationSettings/paginateReducer";
import sliderReducer from "./siteSettings/sliderSettings/silderReducer";
import agGridReducer from "./siteSettings/agGrid/agGridReducer";

const persistConfig ={
    key :"root",
    storage,
    whitelist:[
        'cart',
        'paginateReducer',
        'sliderReducer',
        'agGridReducer'
    ]
};

const rootReducer =combineReducers({
    courses:coursesReducer,
    user:userReducer,
    cart:cartReducer,
    singleCourse:courseReducer,
    sidebar:sidebarReducer,
    paginateReducer,
    sliderReducer,
    agGridReducer
});

export default persistReducer(persistConfig,rootReducer);
