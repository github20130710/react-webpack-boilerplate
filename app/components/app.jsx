import React from 'react';

require('./app.less');

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}
