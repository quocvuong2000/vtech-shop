import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        dsSanPham: [],
        soLuong: 0,
        total: 0,
    },
    reducers: {
        addSanPham: (state,action) => {
            state.soLuong += 1;
            state.dsSanPham.push(action.payload);
            state.total += action.payload.giasp * action.payload.soLuong;
        }
    }
})

export const {addSanPham} = cartSlice.actions;
export default cartSlice.reducer;