import React, { Component } from 'react';
import Header from '../components/header/header'
import DevTools from './devtools'

class App extends Component {
  renderDevTools() {
    if(process.env.NODE_ENV !== 'production') return <DevTools/>
  }

  render() {
    return (
      <div>
        <Header name="Marianne Saroli"
                title="Analyste légale sportive / Sports legal analyst chez RDS"
                avatarUrl="https://scontent-ord1-1.xx.fbcdn.net/hprofile-xap1/v/t1.0-1/c0.148.639.639/10981352_10155881939430160_5618745281330528860_n.jpg?oh=9a7ca1cad38a23f06554da5f7c4b2f77&oe=575022FA"
                backgroundUrl="https://images.unsplash.com/photo-1428342319217-5fdaf6d7898e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=8aa7b05f361b66a99b5ffa187198729b"/>
        {this.renderDevTools()}
      </div>
    )
  }
};

export default App;
