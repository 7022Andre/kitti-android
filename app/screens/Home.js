import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { TapButton } from '../components/Button';

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <TapButton
          title="GET STARTED"
          backgroundColor="white"
          onPress={() => navigate('MainSetup')}
        />
        <TapButton
          title="Learn more about Kitti"
          backgroundColor="yellow"
          onPress={() => navigate('SetGoal')}
        />
      </Container>
    );
  }
}
