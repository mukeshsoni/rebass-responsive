import React from "react"
import { Flex } from "rebass"
import { border, borderBottom, width, maxWidth, space } from "styled-system"

const FlexWithBorder = Flex.extend`
  ${space};
  ${border};
  ${borderBottom};
  ${width};
  ${maxWidth};
`

export default FlexWithBorder
