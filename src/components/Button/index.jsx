import React from "react"
import styled from "@emotion/styled"
import { font, types, shape } from "../../config/button"

const Wrapper = styled.button`
  ${font}
  ${props => types[props.type || 'primary']}
  ${shape}
`;

const Button = ({ message, ...otherProps }) => {
  return <Wrapper {...otherProps}>{message}</Wrapper>
}

export default Button