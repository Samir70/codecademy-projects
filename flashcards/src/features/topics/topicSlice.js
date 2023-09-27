import { createSlice } from '@reduxjs/toolkit';

export const selectTopics = (state) => {
  return state.topicReducer.topics
}

const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic(state, action) {
      const { id, name, icon } = action.payload
      state.topics[id] = {
        id, name, icon,
        quizIds: []
      }
    },
    addQuizId(state, action) {
      const {quizId, topicId} = action.payload
      if (state.topics[topicId] !== undefined) {
        state.topics[topicId].quizIds.push(quizId)
      }
    }
  }
});

export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;