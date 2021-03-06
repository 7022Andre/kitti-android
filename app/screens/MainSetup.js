import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { BoxContainer } from '../components/BoxContainer';

//import CreateTasks from './common/createTasks';
//import SetTimer from './setTimer';

export default class MainSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: {
        task1: {
          caption: '',
          display_src: '',
          active: false,
        },
        task2: {
          caption: '',
          display_src: '',
          active: false,
        },
        task3: {
          caption: '',
          display_src: '',
          active: false,
        },
      },
      reward: {
        caption: '',
        display_src: '',
        active: false,
      },
      activity: {
        caption: '',
        display_src: '',
        active: false,
      },
      time: {
        hours: 0,
        minutes: 0,
      },
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <BoxContainer navigate={navigate} />

      </Container>
    );
  }
}


/*
class  extends Component {
  render() {
    const funGoal = this.props.store.funGoal;
    const targetGoal = this.props.store.targetGoal;
    const tasks = this.props.store.tasks;
    const time = this.props.store.time;

    const checkApp = (history) => {
      if (!funGoal.active || !targetGoal.active || !tasks.goal1.active) {
        alert('Please choose at least one task, reward and activity.');
      } else if (time.minutes > 0 || time.hours > 0) {
        this.props.history.push('/run');
      } else {
        alert('Please enter a valid time.');
      }
    };

    const resetApp = () => {
      this.props.actions.resetApp();
      alert('Kitt has been reset.');
    };

    return (
      <div className="Main">
        <div className="boxes">
          <div className="dash-boxes">
            <div>
              <CreateTasks tasks={tasks} />
              <h5>Task(s)</h5>
            </div>
            <div>
              <Link to="/fungoal">
                <button className="fun-box">
                  <img className="main-image" src={funGoal.display_src} alt={funGoal.caption} />
                </button>
              </Link>
              <h5>Reward</h5>
            </div>
            <div>
              <Link to="/targetgoal">
                <button className="target-box">
                  <img className="main-image" src={targetGoal.display_src} alt={targetGoal.caption} />
                </button>
              </Link>
              <h5>Activity</h5>
            </div>
          </div>
        </div>

        <SetTimer />
        <h5>Time limit</h5>
        <br />
        <button className="btn btn-lg btn-success" onClick={() => checkApp()}>START</button>
        <br />
        <br />
        <button className="btn btn-danger" onClick={() => resetApp()}>Reset</button>
      </div>
    );
  }
}
*/
