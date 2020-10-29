import React from 'react';

import Button from '../UI/Button';
import Input from '../UI/Input';

const AddTodo = React.memo((props) => {
  return (
    <div className="add-todo">
      <Button 
        btnClass={[props.showInput ? 'danger' : 'primary', 'block']}
        click={props.showClicked}>{props.showInput ? 'Calcel' : 'Add Activity'}</Button>
      <Input 
        itemValue={props.itemValue}
        change={props.inputChange}
        addClick={props.addClicked}
        type="text" 
        ph="Do a Something"
        show={props.showInput}/>
    </div>
  )
});

export default AddTodo;