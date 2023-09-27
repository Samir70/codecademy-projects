import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topicSlice';

export const selectQuizes = (state) => {
  return state.quizReducer.quizzes
}

const quizSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { quizId, topicId, cardIds, name } = action.payload;
      state.quizzes[quizId] = {
        id: quizId,
        topicId: topicId,
        cardIds: cardIds,
        name: name
      };
    }
  }
});


export const addQuizAddQuizId = quiz => {
  const { quizId, topicId } = quiz;
  return (dispatch) => {
    dispatch(quizSlice.actions.addQuiz(quiz));
    dispatch(addQuizId({ quizId, topicId }));
  }
};

export const { addQuiz } = quizSlice.actions;
export default quizSlice.reducer;