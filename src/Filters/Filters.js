import React, { Component } from "react"
import { Text, Flex, Button, Sticky, Box } from "rebass"
import SortFilter from "./SortFilter.js"
import TypeOfPosterFilter from "./TypeOfPosterFilter.js"

const FullWidthButton = Button.extend`
  width: 100%;
  border-radius: 0;
  min-height: 100%;
`

const FullHeightFlex = Flex.extend`
  height: 100vh;
`

const HidableBox = Flex.extend`
  display: none;
  @media only screen and (max-width: 500px) {
    display: flex;
  }
`

const HidableBoxInverse = Flex.extend`
  display: flex;
  @media only screen and (min-width: 500px) {
    display: none;
  }
`

export default class Filters extends Component {
  render() {
    return (
      <FullHeightFlex flexDirection="column">
        <Sticky top={0} bg="white">
          <Flex p={2}>
            <HidableBoxInverse>
              <Text fontSize={2} mr={2} onClick={this.props.onBackClick}>
                Back
              </Text>
            </HidableBoxInverse>
            <Text>Filters</Text>
          </Flex>
        </Sticky>
        <Flex flex="1 0 auto" flexDirection="column" mt={3}>
          <Flex mt={2}>
            <SortFilter />
          </Flex>
          <Flex mt={2}>
            <TypeOfPosterFilter />
          </Flex>
        </Flex>
        <HidableBox width="100%">
          <Sticky bottom={0}>
            <FullWidthButton onClick={this.props.onApplyFilterClick}>
              Apply filter
            </FullWidthButton>
          </Sticky>
        </HidableBox>
      </FullHeightFlex>
    )
  }
}
