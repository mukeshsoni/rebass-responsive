import React, { Component } from "react"
import { Flex, Carousel, Image, Box, Text } from "rebass"
import { BoldText, SubduedText } from "../Text"
import { withTheme } from "styled-components"
import DetailHeader from "./DetailHeader.js"
import DetailScreenActions from "./DetailScreenActions"
import HideOnDesktop from "../HideOnDesktop.js"
import HideOnTablet from "../HideOnTablet.js"
import Header from "../Header.js"

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
          <DetailHeader onBackClick={onBackClick} />
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
        <Box p={2}>
          <BoldText mb={2}>{title}</BoldText>
          <BoldText color={colors.brand} mb={3}>
            Rs. {price}
          </BoldText>
          <Text mb={2}>{description}</Text>
          {Object.keys(this.props.listing)
            .filter(
              prop => !["id", "title", "price", "description"].includes(prop)
            )
            .map((prop, index) => {
              return (
                <Box mb={3} key={index}>
                  <SubduedText mb={1}>{prop}</SubduedText>
                  <Text>{this.props.listing[prop]}</Text>
                </Box>
              )
            })}
        </Box>
        <DetailScreenActions />
      </Flex>
    )
  }
}

export default withTheme(DetailScreen)
