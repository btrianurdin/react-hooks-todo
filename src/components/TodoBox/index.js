import React from 'react';
import List from './List';

const TodoBox = React.memo((props) => {

  let activity = '';

  if (props.activityItems.length === 0) {
    activity = <div className="no-activity">No Activity Today <span role="img" aria-label="coffee">☕</span></div>;
  } else {
    activity = props.activityItems.map(item => (
      <List 
        key={item.id} 
        activity={item.text} 
        Checkboxclicked={(e) => props.activityClick(item.id, e)}
        RemoveClicked={() => props.activityRemove(item.id)}
        done={item.done} />
    )).reverse();
  }

  return (
    <>
      <div className="todo-box">
        {activity}
      </div>
      <div className="footer">
        <h5>Build w/ ❤ by @btrianurdin</h5>
      </div>
    </>
  )
});

export default TodoBox;