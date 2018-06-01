import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'

const Routes = () =>
  <Switch>
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contact" component={Contact} />
    {/* Fallback to About component */}
    <Route component={About} />
  </Switch>

export default Routes
