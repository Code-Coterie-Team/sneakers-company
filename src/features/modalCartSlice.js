import { createSlice } from '@reduxjs/toolkit'


export const modalCartSlice = createSlice({
    name: 'isShowModalCart',
    initialState: false,
    reducers: {
        setIsShowModalCart: (state, action) => {
            return action.payload;
        }
    },
})

export const { setIsShowModalCart } = modalCartSlice.actions

export default modalCartSlice.reducer