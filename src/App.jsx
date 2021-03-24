import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Breeds from "./pages/Breeds";
import Navbar from "./components/Navbar";
import Random from "./pages/Random";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/random" component={Random} />
          <Route path="/breeds" component={Breeds} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
