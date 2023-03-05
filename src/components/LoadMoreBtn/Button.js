import PropTypes from 'prop-types';

import React from 'react';

import { ButtonCss } from './Button.styled';

function Button({ onClick }) {
  return (
    <ButtonCss type="button" onClick={onClick}>
      Loadmore
    </ButtonCss>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
