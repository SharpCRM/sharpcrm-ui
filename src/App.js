import React, { Component } from "react";
import logo from "./logo.png";
import Home from "./components/Home";
import Login from "./components/LoginPage";
import Leads from "./components/Leads";
import LeadPage from "./components/LeadPage";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { Switch, Route } from "react-router-dom";
import AddNewLead from "./components/AddNewLead";
import DealPage from "./components/DealPage";
import Deals from "./components/Deals";
import UserPage from "./components/UserPage";
import DataPage from "./components/DataPage";
import RolePage from "./components/RolePage";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/leads">
            <Leads />
          </Route>
          <Route path="/leads/:id">
            <LeadPage />
          </Route>
          <Route exact path="/newlead">
            <AddNewLead />
          </Route>
          <Route exact path="/deals">
            <Deals />
          </Route>
          <Route exact path="/deals/:id">
            <DealPage />
          </Route>
          <Route path="/users">
            <UserPage />
          </Route>
          <Route path="/data">
            <DataPage />
          </Route>
          <Route path="/roles">
            <RolePage />
          </Route>
          <Route path="/logout">
            <Login />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
