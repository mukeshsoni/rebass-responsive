import React, { PureComponent } from "react"
import { Text } from "rebass"
import ContainerWithBg from "../ContainerWithBg"
import FontAwesome from "react-fontawesome"

export default class FilterHeader extends PureComponent {
  render() {
    return (
      <ContainerWithBg p={2} bg="#159777" alignItems="center" width="100vw">
        <Text fontSize={2} mr={2} onClick={this.props.onBackClick}>
          <FontAwesome name="arrow-left" />
        </Text>
        <Text>Filters</Text>
      </ContainerWithBg>
    )
  }
}
