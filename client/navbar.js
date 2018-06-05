import React, { Component } from 'react'
import history from './history'

export default class Navbar extends Component {
  constructor() {
    this.state = { selectedId: 'about' }
  }

  handleChange(e) {
    const selectedId = e.target.getAttribute('id')
    e.preventDefault()
    this.setState({ selectedId })
    history.push(`/${selectedId}`)
  }

  render() {
    <nav>
      <ul id="navbar">
        <li id="about" className={selectedId === 'about' ? 'active' : ''}>About Me</li>
        <li id="projects" className={selectedId === 'projects' ? 'active' : ''}>Projects</li>
        <li id="contact" className={selectedId === 'contact' ? 'active' : ''}>Contact Me</li>
      </ul>
    </nav>
  }
}
