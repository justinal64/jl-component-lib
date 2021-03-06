import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { themePicker } from "../utils/Utils";
// const displayBlock = `
//   display: block;
//   width: 100%;
// `;

const disabledButton = `
  opacity: .65;
  pointer-events: none;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 2px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: 0 12px;
  text-transform: uppercase;
  transition: all 300ms ease;
  font-size: ${props => (props.font ? props.font : "1")}rem;
  ${props => (props.disabled ? disabledButton : "")};
  ${props => themePicker(props.inverted, props.buttonType)};
`;

const Button = props => {
  let { buttonType, disabled, font, inverted, onClick, title } = props;
  return (
    <StyledButton
      buttonType={buttonType}
      disabled={disabled}
      font={font}
      inverted={inverted}
      onClick={onClick}
      title={title}
    >
      {title}
    </StyledButton>
  );
};

Button.defaultProps = {
  buttonType: "Primary",
  disabled: false,
  font: 1,
  inverted: false,
  onClick: () => console.log("Working!")
};

Button.propTypes = {
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
  font: PropTypes.number,
  inverted: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
};

export default Button;
