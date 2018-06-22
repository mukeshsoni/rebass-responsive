import React, { PureComponent } from "react"
import { Flex, Box, Text } from "rebass"
import ContainerWithBg from "./ContainerWithBg"
import FontAwesome from "react-fontawesome"
import { withTheme } from "styled-components"

class CategoryHeader extends PureComponent {
  render() {
    const { screen, theme } = this.props

    return (
      <ContainerWithBg p={2} bg={theme.colors.brand} alignItems="center">
        {screen === "category" ? (
          <Flex p={2}>
            <Text fontSize={2} mr={2} onClick={this.props.onCloseClick}>
              <FontAwesome name="close" />
            </Text>
            <Text>Categories</Text>
          </Flex>
        ) : (
          <Flex alignItems="center" p={2}>
            <Box mr={2} onClick={this.props.onBackButtonClick}>
              <FontAwesome name="arrow-left" />
            </Box>
            <Text>Back to all categories</Text>
          </Flex>
        )}
      </ContainerWithBg>
    )
  }
}

export default withTheme(CategoryHeader)
