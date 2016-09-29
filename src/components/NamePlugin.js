import React from 'react';

export default class NamePlugin extends React.Component {
  constructor() {
    super();
    this.state = {
      name: this.getName(this.props.context)
    };
  }

  componentWillUpdate(nextProps, nextState) {
    nextState.name = this.getName(nextProps.context);
  }

  getName(context) {
    return context.sources.find(x => x.key === 'name').value;
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

window.store.dispatch(window.registerPlugin('NamePlugin', NamePlugin));