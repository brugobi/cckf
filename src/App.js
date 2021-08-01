import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Quote from './components/Quote';
import About from './components/About';
import Classes from './components/Classes';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <>
        <Nav />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Classes" component={Classes} />
          <Route exact path="/Gallery" component={Gallery} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Quote" component={Quote} />
        </Switch>
      </>
    </div>
  );
}

export default App;
