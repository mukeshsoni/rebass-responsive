import React, { PureComponent } from "react";
import { Box, Flex, Text, Image } from "rebass";

export default class Listing extends PureComponent {
  render() {
    const {
      title,
      description,
      location,
      category,
      price
    } = this.props.listing;

    return (
      <Flex p={2}>
        <Image src="http://via.placeholder.com/100x100" />
        <Flex flexDirection="column" p={1} ml={10}>
          <Text fontWeight="bold">{title}</Text>
          <Text>
            {location}, {category}
          </Text>
          <Text>Rs. {price}</Text>
        </Flex>
      </Flex>
    );
  }
}
