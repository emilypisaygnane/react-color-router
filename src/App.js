import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import RGB from './Components/RGB/RGB';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/rgb/:r/:g/:b">
          <RGB />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
