import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Checkout from './Checkout';
import { auth } from './firebase';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Payment from './Payment';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';
import amazon from './assets/amazon-white.png';
import './Footer.css';


const promise = loadStripe(
  'pk_test_51HdBVpA6rg4sOpbbPjQSk926hMNv8sgCTmXhE6oN0Y8e4zWNfFxw37vF2bDxvrfj82kq64ZY0ROsQxPGFgq1eCl600nnXKzIps'
  );


function App() {

  const [{}, dispatch] = useStateValue();

  // will only run once when the app component loads
  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
     // console.log("The user is >>>", authUser);
   

    if (authUser) {
      // the user just logged in or the user was logged in

      dispatch({
        type: "SET_USER",
        user: authUser,

      });
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER", // shoots the user into datalayer
        user: null,
      });
     }
    });
  }, [])

  return (
    
    <Router>
    <div className="app">

      {/* Header */}
      <Header />
      

     {/* Router */}
      
      <Switch>

        {/* Orders component */}
       <Route path="/orders">
          <Orders />
        </Route>

        {/* Payment component */}
       <Route path="/payment">
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>

         {/* Login component */}
       <Route path="/login">
          <Login />
        </Route>

        {/* Checkout component */}
       <Route path="/checkout">
          <Checkout />
        </Route>

     {/* Home component */}
        <Route path="/">
          <Home />
        </Route>

      </Switch>

      
      <div className="footer">

           <Link to="/">
            <div className="footer__company">
            <img className="footer__img" src={amazon} alt="footer-logo" />
            </div>
            </Link>

            <div className="footer__company">
                <h1 className="footer__title">About Amazon</h1>
                <h5>Sell Products on Amazon</h5>
                <h5>Amazon History</h5>
                <h5>Blog & Careers</h5>
            </div>

            
            <div className="footer__company">
            
            <h1 className="footer__title">Returns & Orders</h1>
            <Link to ="/orders">
            <h5>My Orders</h5>
            </Link>
            <h5>Return Information</h5>
            <h5>Payment and Card Settings</h5>
            </div>
            

            <div className="footer__company">
            <h1 className="footer__title">Let Us Help You</h1>
            <h5>FAQ Forum - Amazon</h5>
            <h5>Amazon and Covid-19</h5>
            <h5>Shipping Rates</h5>
            <h5>Amazon Assitant</h5>
                
            </div>
        </div>

        <div className="footer__copyright">
              <h1 className="footer__ots">
                  Created and Style by &copy; Ole Thomas Skogli - React Amazon Clone - 2020
              </h1>
            </div>

      </div>
    </Router>

      

    
  );
}

export default App;
