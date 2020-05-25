import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import BannerTop from './components/BannerTop/BannerTop';
import FoodCategory from './components/FoodCategory/FoodCategory';
import Login from './components/Auth/Login';
import { AuthContextProvider, PrivateRoute } from "./components/Auth/Auth";

function App(props) {
  return (
    <div>
      <AuthContextProvider>
        <Header></Header>
        <BannerTop></BannerTop>
        <FoodCategory></FoodCategory>

        <Router>
          <Switch>
            <Route path="/login">
              {/* <Login></Login> */}
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;