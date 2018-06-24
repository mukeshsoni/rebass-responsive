import React from "react"
import { Flex } from "rebass"
import {
  border,
  borderBottom,
  borderTop,
  width,
  maxWidth,
  space,
  height,
  background
} from "styled-system"

const FlexPlus = Flex.extend`
  ${space};
  ${border};
  ${borderBottom};
  ${borderTop};
  ${width};
  ${maxWidth};
  ${height};
  ${background};
  margin: ${props => props.margin};
`

export default FlexPlus
