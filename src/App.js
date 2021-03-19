import './App.css';
import CourseManager from "./components/course-manager/course-manager";
import Home from "./components/home"
import {BrowserRouter, Route} from "react-router-dom";
import CourseEditor from "./components/course-editor/course-editor";

function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
              <Route path="/" exact={true}>
                  <Home/>
              </Route>
              <Route path={["/courses", "/courses/table", "/courses/grid"]} exact={true}>
                  <CourseManager/>
              </Route>
              <Route path={["/courses/:layout/edit",
                            "/courses/:layout/edit/:courseId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"
                            ]}
                     exact={true}
                     render={(props) => <CourseEditor {...props}/>}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
