import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import tasks from '../../data/tasks';
import styles from './styles';

export default class TaskGrid extends Component {
  CreateTaskGrid = () => {
    return tasks.map((task, i) =>
      <View style={styles.gridImageContainer} key={i}>
        <Image resizeMode="contain" style={styles.gridImage} source={task.src} />
        <Text style={styles.caption}>{task.caption}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.CreateTaskGrid()}
      </View>
    );
  }
}
