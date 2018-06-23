import React, { Component } from "react"
import { Flex, Carousel, Image, Box, Text, Sticky } from "rebass"
import { BoldText, SubduedText } from "../Text"
import { withTheme } from "styled-components"
import DetailHeader from "./DetailHeader.js"
import DetailScreenActions from "./DetailScreenActions"
import HideOnDesktop from "../HideOnDesktop.js"
import HideOnTablet from "../HideOnTablet.js"
import Header from "../Header.js"
import ListingAttributes from "./ListingAttributes.js"
import ContactOptions from "./ContactOptions"

class DetailScreen extends Component {
  render() {
    const {
      listing: { title, price, description },
      theme: { colors },
      onBackClick
    } = this.props

    return (
      <Flex flexDirection="column">
        <HideOnTablet>
          <Header />
        </HideOnTablet>
        <HideOnDesktop>
          <DetailHeader onBackClick={onBackClick} title={title} />
        </HideOnDesktop>
        <Carousel index={false ? 1 : 0} mb={3}>
          <Box>
            <Image
              src="http://via.placeholder.com/100x100"
              width="100%"
              height={200}
            />
          </Box>
          <Box>
            <Image src="http://via.placeholder.com/100x100" />
          </Box>
        </Carousel>
        <Box p={3}>
          <BoldText mb={2}>{title}</BoldText>
          <BoldText color={colors.brand} mb={3}>
            Rs. {price}
          </BoldText>
          <Text mb={4}>{description}</Text>
          <ListingAttributes listing={this.props.listing} />
        </Box>
        <DetailScreenActions />
        <Sticky bottom={0} bg="white">
          <ContactOptions />
        </Sticky>
      </Flex>
    )
  }
}

export default withTheme(DetailScreen)
