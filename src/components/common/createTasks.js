import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const goals = props['tasks'];

  function createGoal(goalNo) {
    const goal = goals['goal' + goalNo];
    return (
      <Link to={'/tasks/' + goalNo} >
        <button className="task-box">
          <img className="main-image" src={goal.display_src} alt={goal.caption} />
        </button>
      </Link>
    );
  }

  return (
    <div className="tasks">
      {createGoal(1)}
      {goals.goal2.active ? createGoal(2) : false }
      {goals.goal3.active ? createGoal(3) : false }
    </div>
  );
};
