import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// const displayBlock = `
//   display: block;
//   width: 100%;
// `;

const disabledButton = `
  opacity: .65;
  pointer-events: none;
`;

const StyledButton = styled.button`
  background: #7e5bef;
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
  ${props => (props.disabled ? disabledButton : "")};
  &:hover {
    background: #592dea;
  }
`;

const Button = props => {
  let { title, buttonType, font, inverted, disabled, block, onClick } = props;
  onClick =
    typeof onClick === "function" ? onClick : () => console.log("Working!");
  return (
    <StyledButton
      buttonType={buttonType}
      disabled={disabled}
      display={block ? true : false}
      font={font}
      inverted={inverted}
      onClick={onClick}
      title={title}
    >
      {title}
    </StyledButton>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  font: PropTypes.number,
  title: PropTypes.string.isRequired
};

export default Button;
