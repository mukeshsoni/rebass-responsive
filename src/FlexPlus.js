import React from "react"
import { Flex } from "rebass"
import {
  border,
  borderBottom,
  borderTop,
  width,
  maxWidth,
  space
} from "styled-system"

const FlexPlus = Flex.extend`
  ${space};
  ${border};
  ${borderBottom};
  ${borderTop};
  ${width};
  ${maxWidth};
`

export default FlexPlus
