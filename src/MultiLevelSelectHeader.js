import React, { PureComponent } from "react"
import { Flex, Box, Text } from "rebass"
import ContainerWithBg from "./ContainerWithBg"
import FontAwesome from "react-fontawesome"
import { withTheme } from "styled-components"

class MultiLevelSelectHeader extends PureComponent {
  render() {
    const { screen, theme, header } = this.props

    return (
      <ContainerWithBg
        p={2}
        bg={theme.colors.brand}
        alignItems="center"
        alignItems="center"
      >
        {screen === 1 ? (
          <Flex p={2}>
            <Text fontSize={2} mr={2} onClick={this.props.onCloseClick}>
              <FontAwesome name="close" inverse={true} />
            </Text>
            <Text color="white" fontSize={4}>
              {header}
            </Text>
          </Flex>
        ) : (
          <Flex alignItems="center" p={2}>
            <Box mr={2} onClick={this.props.onBackButtonClick}>
              <FontAwesome name="arrow-left" inverse={true} />
            </Box>
            <Text color="white" fontSize={4}>
              Back
            </Text>
          </Flex>
        )}
      </ContainerWithBg>
    )
  }
}

export default withTheme(MultiLevelSelectHeader)
