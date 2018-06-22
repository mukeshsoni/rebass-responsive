import React, { Component } from "react"
import { Box, Flex, Button, Input } from "rebass"
import FullWidthButton from "./Button/FullWidthButton.js"
import HideOnNonMobile from "./HideOnNonMobile.js"

export default class SearchRow extends Component {
  render() {
    const { onCategoryButtonClick, onLocationButtonClick } = this.props

    return (
      <Flex flexWrap="wrap" mt={[0, 1]}>
        <Flex width={[1, 1 / 2]} p={[0, 1]}>
          <Flex flex="1" mr={[0, 1]}>
            <FullWidthButton>Location</FullWidthButton>
          </Flex>
          <HideOnNonMobile bg="#ececec" alignItems="center" color="#767676">
            ❘
          </HideOnNonMobile>
          <Flex flex="1" mr={[0, 1]}>
            <FullWidthButton onClick={onCategoryButtonClick}>
              Category
            </FullWidthButton>
          </Flex>
        </Flex>
        <Box width={[1, 1 / 2]} p={[1, 1]}>
          <Input defaultValue="Hello" placeholder="Input" mt={10} pt={1} />
        </Box>
      </Flex>
    )
  }
}
