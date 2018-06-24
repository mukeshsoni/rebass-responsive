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
        <Flex flexDirection={["column", "column", "row"]}>
          <Flex flexDirection="column" flex={3}>
            <Carousel index={false ? 1 : 0} mb={3} flex="3">
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

            <Flex
              p={4}
              pt={3}
              flexDirection={["column", "column", "row"]}
              justifyContent={[null, null, "space-between"]}
            >
              <Box mr={[0, 0, 6]} maxWidth={400}>
                <BoldText mb={2}>{title}</BoldText>
                <BoldText color={colors.brand} mb={3}>
                  Rs. {price}
                </BoldText>
                <Text mb={4}>{description}</Text>
              </Box>
              <Box>
                <ListingAttributes listing={this.props.listing} />
              </Box>
            </Flex>
          </Flex>
          <HideOnDesktop>
            <DetailScreenActions />
          </HideOnDesktop>
          <ContactOptions />
        </Flex>
      </Flex>
    )
  }
}

export default withTheme(DetailScreen)
