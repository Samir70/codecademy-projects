import { configureStore } from "@reduxjs/toolkit";
import topicReducer from '../features/topics/topicSlice';
import quizReducer from '../features/quizzes/quizSlice';
import cardReducer from '../features/cards/cardSlice';

export default configureStore({
  reducer: { topicReducer, quizReducer, cardReducer },
});
