import React, {Component} from 'react'
import './app.scss'

const title = 'React Webpack Demo';

class App extends Component {
  render () {
    return (
      <div className="app mt-20">
        <h1>{title}</h1>
      </div>
    )
  }
}

export default App
