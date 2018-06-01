import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import Main from './main'
import history from './history'

ReactDOM.render(
  <Router history={history}>
    <Main />
  </Router>,
  document.getElementById('app')
)
