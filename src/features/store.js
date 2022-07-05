import { configureStore } from '@reduxjs/toolkit';

import counter from './sample/counterSlice';
import todos from './sample/todoSlice';

export default configureStore({
  reducer: {
    counter,
    todos
  }
});
