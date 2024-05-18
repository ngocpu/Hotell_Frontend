import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './Slice/authSlice'
import themeReducer from './Slice/themeSlice'
import searchReducer from './Slice/searchSlice'
import { persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
    user: authReducer,
    theme:themeReducer,
    search:searchReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});
export const persistor = persistStore(store);