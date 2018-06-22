import React, { Component } from "react"
import { Box, Flex, Button } from "rebass"
import FullWidthButton from "./Button/FullWidthButton.js"
import HideOnNonMobile from "./HideOnNonMobile.js"
import Input from "./Input.js"

export default class SearchRow extends Component {
  render() {
    const {
      onCategoryButtonClick,
      onLocationButtonClick,
      category = "Category"
    } = this.props

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
              {category}
            </FullWidthButton>
          </Flex>
        </Flex>
        <Box width={[1, 1 / 2]} p={[1, 1]}>
          <Input placeholder="Looking for something?" mt={10} pt={1} />
        </Box>
      </Flex>
    )
  }
}
