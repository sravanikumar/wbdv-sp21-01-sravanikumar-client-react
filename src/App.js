import './App.css';
import CourseManager from "./components/course-manager/course-manager";
import Home from "./components/home"
import {BrowserRouter, Route} from "react-router-dom";
import CourseEditor from "./components/course-editor/course-editor";
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import quizReducer from "./reducers/quiz-reducer";
import questionReducer from "./reducers/question-reducer";
import quizAttemptReducer from "./reducers/quiz-attempt-reducer";
import QuizAttempts from "./components/quizzes/quiz-attempts";

const reducer = combineReducers({
    quizReducer: quizReducer,
    questionReducer: questionReducer,
    quizAttemptReducer: quizAttemptReducer
})

const store = createStore(reducer)


function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <div className="container-fluid">

                  <Route path="/" exact={true}>
                      <Home/>
                  </Route>

                  <Route path={["/courses", "/courses/table", "/courses/grid"]} exact={true}>
                      <CourseManager/>
                  </Route>

                  <Route path={["/courses/:courseId/quizzes"]} exact={true}>
                      <QuizzesList/>
                  </Route>

                  <Route path={["/courses/:courseId/quizzes/:quizId"]} exact={true}>
                      <Quiz/>
                  </Route>

                  <Route path={["/courses/:courseId/quizzes/:quizId/attempts"]} exact={true}>
                      <QuizAttempts/>
                  </Route>

                  <Route path={["/courses/:layout/edit",
                                "/courses/:layout/edit/:courseId",
                                "/courses/:layout/edit/:courseId/modules/:moduleId",
                                "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                                "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                                "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetType/:widgetId"
                                ]}
                         exact={true}
                         render={(props) => <CourseEditor {...props}/>}/>
              </div>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
