import React from 'react';
import { Input, TextArea } from './';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "foo"
    }
  }

  render() {
    return (
      <div>
        <Input
          style={{border: '1px solid red', outline: 'none'}}
          initialValue={this.state.value}
          placeholder="Something" />
        <TextArea
          placeholder="Another" />
        <button onClick={this::this._onClick}>Clear</button>
      </div>
    );
  }

  _onClick() {
    this.setState({
      value: ""
    })
  }
}

React.render(
  <App />,
  document.getElementById('playground')
);
