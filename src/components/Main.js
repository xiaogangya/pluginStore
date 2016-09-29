import React from 'react';
import NamePlugin from './NamePlugin';

export default class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'yanz',
      email: 'yanz@microsoft.com',
      seat: 4571
    };
  }

  render() {
    return (
      <NamePlugin context={this.state} />
    );
  }
}