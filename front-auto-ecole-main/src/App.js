import React, { useState } from "react";
import "./App.css";
import Quiz1 from "./components/quiz1/quiz1";
import SignIn from "./components/welcomepage/SignIn"
import SmoothScroll from "smooth-scroll";
import Welcome from "./components/welcomepage/Welcome"
import SignUp from "./components/welcomepage/SignUp"
import Checkout from "./components/welcomepage/checkout/Checkout"
import { Route, BrowserRouter, Switch } from "react-router-dom";
import DashboardAdmin from "./components/dashbord/DashboardAdmin";
import EditPerson from "./components/dashbord/DataTable/EditPerson";
import EditCar from "./components/dashbord/DataTable/EditCar";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
/**/
const App = () => {
  const [price, setPrice] = useState('0')
  return (

    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Welcome setPrice={setPrice} />} />
          <Route exact path="/SignIn" component={() => <SignIn />} />
          <Route exact path="/SignUp" component={() => <SignUp price={price} />} />
          <Route exact path="/Checkout" component={() => <Checkout price={price} />} />
          <Route exact path="/DashboardAdmin" component={DashboardAdmin} />
          <Route exact path="/EditCar/:id" component={EditCar} />
          <Route exact path="/EditPerson/:id" component={EditPerson} />
          <Route exact path="/Quiz" component={Quiz1} />
        </Switch>
      </BrowserRouter>



    </div>


  );
};

export default App;
