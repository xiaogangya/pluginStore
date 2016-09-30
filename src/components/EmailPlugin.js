import React from 'react';

export default class EmailPlugin extends React.Component {
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
    return context.sources.find(x => x.key === 'email').value;
  }

  render() {
    return (
      <div>
        email plugin:
        <div>{this.state.value}</div>
      </div>
    );
  }
}

EmailPlugin.propTypes = {
  context: React.PropTypes.object.isRequired
};

window.store.dispatch(window.registerPlugin('EmailPlugin', EmailPlugin));