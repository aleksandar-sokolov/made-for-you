import { Route, Switch } from 'react-router-dom';
import { ErrorContext } from './contexts/ErrorContext';
import { useContext } from 'react';

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage';
import Contacts from './components/Contacts/Contacts';
import ProductForm from './components/ProductForms/ProductForm/ProductForm';
import ProductDetails from './components/ProductDetails/ProductDetails';
import EditForm from './components/ProductForms/EditForm/EditForm';
import Login from './components/UserForms/Login/Login';
import Register from './components/UserForms/Register/Register';
import Page404 from './components/Page404/Page404';
import AuthContextProvider from './contexts/AuthContext';
import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import ErrorWindow from './components/ErrorWindow/ErrorWindow';
import UserProfile from './components/UserProfile/UserProfile';
import authGard from './hoc/authGard';

import './App.css';

function App() {

    const { errorMessage } = useContext(ErrorContext);

    return (
        <div className="site-container">

            <AuthContextProvider>
                <NavBar />
                {errorMessage && <ErrorWindow>{errorMessage}</ErrorWindow>}

                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/contacts" exact component={Contacts} />
                    <Route path="/about" exact component={UnderConstruction} />
                    <Route path="/product/add" exact component={ProductForm} />
                    <Route path="/product/:id" exact component={ProductDetails} />
                    <Route path="/edit/:id" exact component={authGard(EditForm)} />
                    <Route path="/login" exact ><Login /></Route>
                    <Route path="/register" exact component={Register} />
                    <Route path='/user/:username' component={authGard(UserProfile)} />
                    <Route path="*" ><Page404 /></Route>
                </Switch>
            </AuthContextProvider>
            <Footer />
        </div>
    );
}

export default App;
