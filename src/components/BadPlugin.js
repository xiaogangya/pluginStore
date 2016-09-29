import React from 'react';

export default class BadPlugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.getValue(props.context)
    };
  }

  componentWillUpdate(nextProps, nextState) {
    nextState.value = this.getValue(nextProps.context);
  }

  render() {
    return (
      <div>
        It is a bad plugin:
        <div>{this.state.value}</div>
      </div>
    );
  }
}

BadPlugin.propTypes = {
  context: React.PropTypes.object.isRequired
};

window.store.dispatch(window.registerPlugin('BadPlugin', BadPlugin));