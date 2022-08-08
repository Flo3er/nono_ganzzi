import { configureStore } from '@reduxjs/toolkit';

import counter from './sample/counterSlice';
import list, { noticeSlice } from './sample/NoticeSlice';

export default configureStore({
  reducer: {
    board: noticeSlice,
    counter,
  }
});
