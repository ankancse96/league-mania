
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import './App.css';

import Home from "./components/Home/Home";
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";

function App() {
  
  return (
    <Router>
    
 
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/league/:leagueName">
          <LeagueDetails></LeagueDetails>
          </Route>
          <Route path="/dashboard">
          
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            
          </Route>
        </Switch>
      
  </Router>
  );
}

export default App;
