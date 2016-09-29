import React from 'react';

export default class NamePlugin extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        It is a Name Plugin:
        <div>{this.props.context.name}</div>
      </div>
    );
  }
}

NamePlugin.propTypes = {
  context: React.PropTypes.object.isRequired
};