import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { ClickButton } from '../components/Button';

export default class Home extends Component {
  handlePressGetStarted = () => {
    console.log('Start pressed');
  };

  handlePressLearnMore = () => {
    console.log('Learn more pressed');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <ClickButton
          title="GET STARTED"
          backgroundColor="white"
          onPress={this.handlePressGetStarted}
        />
        <ClickButton
          title="Learn more about Kitti"
          backgroundColor="yellow"
          onPress={this.handlePressLearnMore}
        />
      </Container>
    );
  }
}
