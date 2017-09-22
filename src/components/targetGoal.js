import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from './common/kittiHeader'
import Task from './common/task';
import * as setKittiActions from '../actions/setKittiActions';

class TargetGoal extends Component {
  handleChange = (display_src, caption) => {
    this.props.actions.setTargetGoal({
      targetGoal: {
        ...this.props.store,
        caption,
        display_src,
        active: true
      }
    });
  }
  
  render() {
    return (
      <div className="TargetGoal">
        <Header title={"Choose An Activity"} />
        <Task handleChange={this.handleChange} store={this.props.store} />
      </div>
    );
  }
}

function mapStateToProps(store, ownProps) {
  return {
    store: store['store']['targetGoal']
  };
}

function mapDispatchProps(dispatch) {
  return {
    actions: bindActionCreators(setKittiActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchProps)(TargetGoal);