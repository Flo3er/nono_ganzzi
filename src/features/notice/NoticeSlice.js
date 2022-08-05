import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lastId: 0,
    inputData: [
        {
            id:'',
            title:'',
            content:''
        }
    ],
    selectRowData: {}
}

export const noticeSlice = createSlice({
    name: 'notice',
    initialState,
    reducers: {
        save: (state, action) => {
            return{
            lastId: state.lastId + 1,
            inputData: state.inputData.concat({
                ...action.payload,
                id:state.lastId + 1
            })
        }
        },
    },
    extraReducers: {}
})

export const { save } = noticeSlice.actions;

export default noticeSlice.reducer;
