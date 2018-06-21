import React, { Component } from "react"
import { Box, Flex, Button, Input } from "rebass"

const FullWidthButton = Button.extend`
  width: 100%;
`

export default class SearchRow extends Component {
  render() {
    const { onCategoryButtonClick, onLocationButtonClick } = this.props

    return (
      <Flex flexWrap="wrap" mt={1}>
        <Flex width={[1, 1 / 2]} p={1}>
          <Flex width={1 / 2} mr={1}>
            <FullWidthButton>Location</FullWidthButton>
          </Flex>
          <Flex width={1 / 2} mr={[0, 1]}>
            <FullWidthButton onClick={onCategoryButtonClick}>
              Category
            </FullWidthButton>
          </Flex>
        </Flex>
        <Box width={[1, 1 / 2]} p={1}>
          <Input defaultValue="Hello" placeholder="Input" mt={10} pt={1} />
        </Box>
      </Flex>
    )
  }
}
