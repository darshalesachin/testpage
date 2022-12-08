import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppDispatch} from "../store";

import { poc_demo } from "./mock/mock";

type PocDemoState = FetchState<DemoResponseEntity>

const initialState: PocDemoState = {
    pending: false,
    data: null,
    error: null,
    lastFetch: null,
}

const pocDemoSlice = createSlice({
    name: 'poc-demo',
    initialState,
    reducers: {
        pending: (state: PocDemoState): void => {
            state.pending = true
            state.error = null
            state.lastFetch = null
        },
        success: (state: PocDemoState, action: PayloadAction<DemoResponseEntity>): void => {
            state.pending = false
            state.data = action.payload
            state.lastFetch = Date.now()
        },
        failed: (state: PocDemoState, action: PayloadAction<string>): void => {
            state.pending = false
            state.error = {message: action.payload}
            state.lastFetch = Date.now()
        },
    },
})
export default pocDemoSlice

const RUN_FAKE_API = true


const { pending, success, failed } = pocDemoSlice.actions

export const fetchDemo =
    (input: string) =>
        async (dispatch: AppDispatch): Promise<any> => {
            dispatch(pending())

            try {
                if (!RUN_FAKE_API) {
                    const response = await fetch(`<URL>`,
                        {
                            method: 'GET',
                            headers: {
                                'Accept': 'application/json'
                            }
                        }
                    )
                    const data = await response.json()

                    if (data.fail) {
                        throw Error(data.responseMessage)
                    }
                    dispatch(success(data))
                } else {
                    const data = {
                        ...poc_demo,
                    }

                    if (data.fail) {
                        throw Error(data.responseMessage)
                    }
                    dispatch(success(data))
                }
                return true
            } catch (error) {
                dispatch(failed('Some error.'))
                return false
            }
        }
