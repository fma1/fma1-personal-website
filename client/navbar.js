import React, { Component } from 'react'
import history from './history'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedId: 'about' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const selectedId = e.target.getAttribute('id')
    e.preventDefault()
    this.setState({ selectedId })
    history.push(`/${selectedId}`)
  }

  render() {
    return (
      <nav>
        <ul id="navbar">
          <li id="about" className={this.state.selectedId === 'about' ? 'active' : ''} onClick={(e) => this.handleChange(e)}>About Me</li>
          <li id="projects" className={this.state.selectedId === 'projects' ? 'active' : ''} onClick={(e) => this.handleChange(e)}>Projects</li>
          <li id="contact" className={this.state.selectedId === 'contact' ? 'active' : ''} onClick={(e) => this.handleChange(e)}>Contact Me</li>
        </ul>
      </nav>
    )
  }
}
