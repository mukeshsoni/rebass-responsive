import React from "react"
import { color } from "styled-system"
import { Flex } from "rebass"

const ContainerWithBg = Flex.extend`
  ${color};
  width: 100%;
`

export default ContainerWithBg
