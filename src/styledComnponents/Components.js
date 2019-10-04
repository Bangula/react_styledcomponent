import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
  background: ${({ state }) => (state ? "red" : "lightblue")};
  color: white;
`;

export const Button = styled.button`
  padding: ${props => {
    if (props.sm) {
      return "4px 6px";
    } else if (props.md) {
      return "7px 11px";
    } else if (props.lg) {
      return "9px 16px";
    } else if (props.xl) {
      return "11px 18px";
    } else {
      return "7px 11px";
    }
  }}
  width: ${props => {
    if (props) {
    }
  }};
  transition: all 0.3s;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  border: none;
  margin: 2px;
  background: ${({ background }) => (background ? background : "blue")};
  color: ${({ color }) => (color ? color : "white")};
  &:hover {
    opacity: 0.7;
  }
`;

export const Input = styled.input`
  border: none;
  transition: all 0.3s;
  margin: 0 auto;
  border-bottom: ${({ border }) =>
    border ? `1px solid ${border}` : "1px solid blue"};
  padding-bottom: 8px;
  &:focus {
    outline: none;
  }
  width: 100%;
  opacity: 0.7;
  &:focus {
    opacity: 1;
  }
  &::placeholder {
    transition: all 0.3s;
  }
  &:focus::placeholder {
    font-size: 8px;
  }
`;
