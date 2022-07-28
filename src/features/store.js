import { configureStore } from '@reduxjs/toolkit';

import counter from './sample/counterSlice';
import list from './sample/NoticeSlice';

export default configureStore({
  reducer: {
    counter,
    list
  }
});
