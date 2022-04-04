import logo from './logo.svg';
import NavContainer from './components/NavContainer'
import Home from './pages/Home'
import { Route, Router } from 'react-router-dom'

function App() {
  return (
      <Router>
        <Route exact path="/" component={Home}/>
      </Router>
  );
}

export default App;
