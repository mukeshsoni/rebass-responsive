import React, { PureComponent } from "react"
import { Flex, Box } from "rebass"
import FlexPlus from "../FlexPlus.js"
import FontAwesome from "react-fontawesome"
import Button from "../Button"
import Space from "styled-space"
import { withTheme } from "styled-components"

class ContactOptions extends PureComponent {
  render() {
    const { colors } = this.props.theme

    return (
      <FlexPlus
        justifyContent={["space-between"]}
        flexDirection={["row", "row", "column"]}
        alignItems="center"
        p={2}
        borderTop={`1px solid ${colors.light}`}
      >
        <Space mr={3}>
          <Box flex="1">
            <Button width="100%">
              <Flex justifyContent="center">
                <Box mr={3}>
                  <FontAwesome name="phone" />
                </Box>
                Call
              </Flex>
            </Button>
          </Box>
          <Box flex="1">
            <Button width="100%">
              <Flex justifyContent="center">
                <Box mr={3}>
                  <FontAwesome name="comments" />
                </Box>
                Chat
              </Flex>
            </Button>
          </Box>
          <Box flex="1">
            <Button width="100%">
              <Flex justifyContent="center">
                <Box mr={3}>
                  <FontAwesome name="envelope" />
                </Box>
                Email
              </Flex>
            </Button>
          </Box>
        </Space>
      </FlexPlus>
    )
  }
}

export default withTheme(ContactOptions)
