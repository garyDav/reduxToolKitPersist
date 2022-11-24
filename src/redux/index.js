import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import counterReducer from './slices/counterSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counterState'],
}

const rootReducer = combineReducers({
  counterState: counterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})
