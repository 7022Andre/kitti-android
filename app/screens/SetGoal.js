import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { TaskGrid } from '../components/TaskGrid';

export default class SetGoal extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#AC4A83'}}>
        <StatusBar translucent={false} barStyle="light-content" />
        <TaskGrid />
      </View>
    );
  }
}
