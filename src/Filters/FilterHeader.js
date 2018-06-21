import React, { PureComponent } from "react"
import { Link, Heading, Flex, Box, Input, Text, Button, Space } from "rebass"
import ContainerWithBg from "../ContainerWithBg"
import FontAwesome from "react-fontawesome"

const HidableBoxInverse = Flex.extend`
  display: flex;
  @media only screen and (min-width: 500px) {
    display: none;
  }
`

export default class FilterHeader extends PureComponent {
  render() {
    return (
      <ContainerWithBg p={2} bg="#159777" alignItems="center">
        <HidableBoxInverse>
          <Text fontSize={2} mr={2} onClick={this.props.onBackClick}>
            <FontAwesome name="arrow-left" />
          </Text>
        </HidableBoxInverse>
        <Text>Filters</Text>
      </ContainerWithBg>
    )
  }
}
