import logo from './logo.svg';
import Navbar from './components/NavContainer'
import Home from './pages/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
