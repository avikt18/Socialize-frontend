import { createSlice } from "@reduxjs/toolkit";

const formFocusSlice = createSlice({
    name: 'formFocus',
    initialState: false,
    reducers: {
        setFormFocus: (state, action) => action.payload
    }
})

export const {setFormFocus} = formFocusSlice.actions
export default formFocusSlice.reducer