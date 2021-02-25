import './App.css';
import CourseManager from "./components/course-manager";
import Home from "./components/home"
import {BrowserRouter, Route} from "react-router-dom";
import CourseEditor from "./components/course-editor";

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
              <Route path="/courses/editor"
                     exact={true}
                     render={(props) => <CourseEditor {...props}/>}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
