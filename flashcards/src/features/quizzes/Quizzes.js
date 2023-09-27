import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { selectQuizes } from '../quizzes/quizSlice';

export default function Quizzes() {
  const quizzes = useSelector(selectQuizes); // replace this with a call to your selector to get all the quizzes in state
  // console.log("quizzes", quizzes)
  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <Link key={quiz.id} to={ROUTES.quizRoute(quiz.id)}>
            <li className="quiz">{quiz.name}, {quiz.id}</li>
          </Link>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}
