// import React from 'react';


// // 초기 상태
// const initialState = {
//     input: '',
//     todos: [
//         {
//             noticeId: 1,
//             title: '제목',
//             content:'내용',
//             onFocused:false,
//             writer:'admin'
//         },
//     ]
// };

// let noticeId = 2;

// export const NoticeSlice = createSlice({
//   name: 'list',
//   initialState,
//   reducers: {
//     changeInput: (state, { payload: input }) => {
//       state.input = input;
//     },
//     insert: (state, action) => {
//       const list = {
//         noticeId: noticeId++,
//         title: action.payload,
//         done: false
//       };
//       state.todos.push(list);
//     },
//     toggle: (state, { payload: noticeId }) => {
//       const index = state.todos.findIndex(list => list.noticeId === noticeId);
//       state.list[index].done = !state.list[index].done;
//     },
//     remove: (state, { payload: noticeId }) => {
//       const index = state.list.findIndex(list => list.noticeId === noticeId);
//       state.list.splice(index, 1);
//     }
//   }
// });

// export const { changeInput, insert, toggle, remove } = NoticeSlice.actions;

// export default NoticeSlice.reducer;
