import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Edit from "./components/Edit";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/edit/:id">
            <Edit />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
