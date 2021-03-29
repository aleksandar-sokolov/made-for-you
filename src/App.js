import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage';
import Contacts from './components/Contacts/Contacts';
import ProductForm from './components/Forms/ProductForm/ProductForm';
import ProductDetails from './components/ProductDetails/ProductDetails';
import EditForm from './components/Forms/EditForm/EditForm';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {

  const [username, setUsername] = useState(localStorage.username);

  const handleLogin = () => {
      setUsername(localStorage.username);
  }

  return (
    <div className="site-container">

      <NavBar username = {username}/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/product/add" exact component={ProductForm} />
        <Route path="/product/:id" exact component={ProductDetails} />
        <Route path="/edit/:id" exact component={EditForm} />
        <Route path="/login" exact ><Login onLogin = {handleLogin}/></Route>
        <Route path="/register" exact component={Register} />
        <Route path="*" ><p>Under construction...</p></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
