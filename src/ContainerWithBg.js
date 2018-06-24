import React from "react"
import { color, maxWidth } from "styled-system"
import { Flex } from "rebass"

const ContainerWithBg = Flex.extend`
  ${color};
  width: 100%;
  ${maxWidth};
  margin: ${props => props.margin};
`

export default ContainerWithBg
