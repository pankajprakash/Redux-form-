
import './App.css';
import Form from './Components/Form'
import Home from './Components/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (

    <div className="App">
       <Router>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/" component={Form } />
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
