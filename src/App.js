import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route,Switch} from 'react-router-dom';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';

import './App.css';
//import Order from './components/Order/Order';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/orders" exact component={Orders}/>
        <Route path="/auth" exact component={Auth}/>
       <Route path="/" exact component={BurgerBuilder}/>
      
      
       </Switch>
      </Layout>
    </div>
  );
}



export default App;
