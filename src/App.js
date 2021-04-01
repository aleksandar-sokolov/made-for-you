import { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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
import { logoutUser } from './services/authServices';
import Page404 from './components/Page404/Page404';
function App() {

  const history = useHistory();

  const [username, setUsername] = useState(localStorage.username);

  const handleLogin = () => {
      setUsername(localStorage.username);
  }

  const handleLogout = () => {
    logoutUser(localStorage.token)
    .then(res => {
      console.log(res);
      localStorage.clear();
      setUsername('');
      history.push('/')

    })
  }

  return (
    <div className="site-container">

      <NavBar username = {username} handleLogout = {handleLogout}/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/product/add" exact component={ProductForm} />
        <Route path="/product/:id" exact component={ProductDetails} />
        <Route path="/edit/:id" exact component={EditForm} />
        <Route path="/login" exact ><Login onLogin = {handleLogin}/></Route>
        <Route path="/register" exact component={Register} />
        <Route path="*" ><Page404/></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
