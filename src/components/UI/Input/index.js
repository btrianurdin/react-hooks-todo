import React from 'react';
import Button from '../Button';

const Input = (props) => (
  <form 
    onSubmit={props.addClick}
    method="post"
    className={props.show ? 'input-show' : '' }>
    <input 
      value={props.itemValue}
      onChange={props.change}
      type={props.type} 
      placeholder={props.ph} 
      className="input" />

    <Button
      btnClass={['success', 'add-todo']}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
        </svg>
    </Button>
  </form>
);



export default Input;