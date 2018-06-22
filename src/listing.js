import React, { PureComponent } from "react"
import { Box, Flex, Text, Image } from "rebass"
import { SubduedText, BoldText } from "./Text"
import FlexWithBorder from "./FlexWithBorder.js"

export default class Listing extends PureComponent {
  render() {
    const { title, description, location, category, price } = this.props.listing

    return (
      <FlexWithBorder
        p={2}
        borderBottom="1px solid #d4ded9"
        width="100%"
        maxWidth={500}
      >
        <Image src="http://via.placeholder.com/100x100" />
        <Flex flexDirection="column" p={1} ml={[1, 2]}>
          <Text fontWeight="bold">{title}</Text>
          <Flex mt={1}>
            <SubduedText>{location}</SubduedText>,{" "}
            <SubduedText>{category}</SubduedText>
          </Flex>
          <BoldText mt={1}>Rs. {price}</BoldText>
        </Flex>
      </FlexWithBorder>
    )
  }
}
