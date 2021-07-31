import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <>
        <Nav />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Quote" component={Quote} />
        </Switch>
      </>
    </div>
  );
}

export default App;
