import React, { Component } from 'react'
import header from 'header.scss'

class Header extends Component {
    render() {
        return (
                <header>
                    <img src={this.props.thumbNailUrl} alt={this.props.name}/>
                    <h1>{this.props.name}</h1>
                    <h3>{this.props.title}</h3>
                </header>
        )
    }
}

export default Header
