import { configureStore } from '@reduxjs/toolkit'

import reducer from './reducer'

const store = configureStore(reducer)

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
