import React, { PropTypes } from 'react';



const Button = (props) => (
<button>
  {props.name}
</button>

);

// Validations
Button.propTypes = {
  name: PropTypes.string,
};

export default Button;