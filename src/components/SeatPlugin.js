import React from 'react';

export default class SeatPlugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.getValue(props.context)
    };
  }

  componentWillUpdate(nextProps, nextState) {
    nextState.value = this.getValue(nextProps.context);
  }

  getValue(context) {
    return context.sources.find(x => x.key === 'seat').value;
  }

  render() {
    return (
      <div>
        seat plugin:
        <div>{this.state.value}</div>
      </div>
    );
  }
}

NamePlugin.propTypes = {
  context: React.PropTypes.object.isRequired
};

window.store.dispatch(window.registerPlugin('SeatPlugin', SeatPlugin));