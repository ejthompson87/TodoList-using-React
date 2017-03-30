import React, { Component } from 'react';
import List from './List'


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      term: '',
      items: []
    }
  }

  onChange = (event) => {
    // use setState to change state
    this.setState({term: event.target.value});
    console.log(this.state.term)  
  }

  onSubmit = (event) => {
    // stopping page from reloading
    event.preventDefault();
    this.setState({
       items: this.state.items.concat(this.state.term),
      //items:  [...this.state.items, this.state.term],
      term: ''
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange}/>
        </form>

          <List nameOfprops={this.state.items}/>

      </div>
    );
  }
}

export default App;
