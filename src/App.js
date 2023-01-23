import './App.css';
import { 
  Redirect, 
  Route, 
  Switch 
} from 'react-router-dom';
// import NavBar from './Components/NavBar/NavBar';
// import RGB from './Components/RGB/RGB';
// import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/rgb/242/194/203" />
        </Route>

        <Route path="/rgb/:r/:g/:b">
          <NavBar />
          <RGB />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </main>

   
  );
}

export default App;
