import { Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './components/HomePage';
import Contacts from './components/Contacts';


function App() {
  return (
    <div className="site-container">

      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/" ><p>Under construction...</p></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
