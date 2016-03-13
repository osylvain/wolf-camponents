import React, { Component } from 'react'

import './header.scss'

class Header extends Component {
  render() {
    return (
      <header style={{backgroundImage: `url(${this.props.backgroundUrl})`}}>
        <div className="header-content">
          <img src={this.props.avatarUrl} alt="Avatar"/>
          <div className="header-details">
            <h1>{this.props.name}</h1>
            <h2>{this.props.title}</h2>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
