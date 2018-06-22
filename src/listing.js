import React, { PureComponent } from "react"
import { Box, Flex, Text, Image } from "rebass"
import { SubduedText, BoldText } from "./Text"
import FlexPlus from "./FlexPlus"
import Space from "styled-space"

export default class Listing extends PureComponent {
  render() {
    const { title, description, location, category, price } = this.props.listing

    return (
      <FlexPlus
        p={2}
        borderBottom="1px solid #d4ded9"
        width="100%"
        maxWidth={500}
      >
        <Image src="http://via.placeholder.com/100x100" />
        <Flex flexDirection="column" p={1} ml={[1, 2]}>
          <Space mb={1}>
            <Text fontWeight="bold">{title}</Text>
            <Flex>
              <SubduedText>{location}</SubduedText>,{" "}
              <SubduedText>{category}</SubduedText>
            </Flex>
            <BoldText>Rs. {price}</BoldText>
          </Space>
        </Flex>
      </FlexPlus>
    )
  }
}
