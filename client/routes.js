import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'

const Content = () =>
  <Switch>
    <Route exact path="/about" component={About} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
