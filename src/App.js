import { Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage';
import Contacts from './components/Contacts/Contacts';
import ProductForm from './components/forms/ProductForm';


function App() {
  return (
    <div className="site-container">

      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/product/add" exact component={ProductForm} />
        <Route path="/" ><p>Under construction...</p></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
