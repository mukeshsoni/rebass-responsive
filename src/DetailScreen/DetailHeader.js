import React, { PureComponent } from "react"
import { Flex, Text } from "rebass"
import ContainerWithBg from "../ContainerWithBg"
import FontAwesome from "react-fontawesome"
import { withTheme } from "styled-components"
import Space from "styled-space"

class DetailHeader extends PureComponent {
  render() {
    const {
      theme: { colors },
      onBackClick
    } = this.props

    return (
      <ContainerWithBg
        p={2}
        bg={colors.brand}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex p={2}>
          <Text fontSize={2} mr={3} onClick={onBackClick}>
            <FontAwesome size="2x" name="arrow-left" inverse={true} />
          </Text>
          <Text color="white" fontSize={4}>
            Details
          </Text>
        </Flex>
        <Flex>
          <Space mr={3}>
            <FontAwesome size="2x" name="share-alt" inverse={true} />
            <FontAwesome
              size="2x"
              name="star"
              style={{ color: "white" }}
              inverse={true}
            />
          </Space>
        </Flex>
      </ContainerWithBg>
    )
  }
}

export default withTheme(DetailHeader)
