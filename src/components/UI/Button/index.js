import React from 'react';

const Button = React.memo((props) => {
  return(
    <button 
       className={['btn ', ...props.btnClass].join(' btn-')}
       onClick={props.click}>{props.children}</button>
  );

});

export default Button;