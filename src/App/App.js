import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Register from "./Register/Register";
import Login from "./Login/Login";
import Homepage from "./Homepage/Homepage";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Category from "./Category/Category";
import Product from "./Category/Product/Product";
import Cart from "./Cart/Cart";
import Admin from "./Admin/Admin";
import NoMatch from './NoMatch';

class App extends React.Component {
  render() {
    return (
        <Router>
            <div className="container App">
                <Header />
                <main>
                    <Switch>
                        <Route path="/" exact component={Homepage} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/category/:id" exact component={Category} />
                        <Route path="/category/:categoryId/product/:id" component={Product} />

                        <Route path="/admin" component={Admin} />
                        <Route component={NoMatch} />
                    </Switch>
                </main>
            </div>
        </Router>
    );
  }
}

export default App;
