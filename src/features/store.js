import { configureStore } from "@reduxjs/toolkit";

import noticeSlice from './notice/NoticeSlice';

export const store = configureStore({
    reducer: {
        notice: noticeSlice
    }
});