import React, { Component } from "react"
import { Link, Flex, Box, Text, ButtonTransparent } from "rebass"
import ContainerWithBg from "./ContainerWithBg"
import Menu from "./Menu.js"
import HideOnMobile from "./HideOnMobile"
import HideOnNonMobile from "./HideOnNonMobile"
import FontAwesome from "react-fontawesome"
import YellowButton from "./Button/YellowButton.js"
import { withTheme } from "styled-components"
import FlexPlus from "./FlexPlus.js"

const Logo = () => (
  <Link href="#!">
    <Text color="white">Ikman</Text>
  </Link>
)

class Header extends Component {
  render() {
    const { colors } = this.props.theme

    return (
      <ContainerWithBg p={2} bg={colors.brand}>
        <FlexPlus
          maxWidth={1156}
          margin="auto"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Flex>
            <Menu />
            <Logo />
          </Flex>
          <Flex alignItems="center">
            <HideOnNonMobile mr={2}>
              <ButtonTransparent onClick={this.props.onFilterLinkClick}>
                <FontAwesome name="filter" inverse={true} />
              </ButtonTransparent>
            </HideOnNonMobile>
            <Box mr={3}>
              <FontAwesome name="comments" inverse={true} />
            </Box>
            <HideOnMobile>
              <YellowButton>Post your ad</YellowButton>
            </HideOnMobile>
          </Flex>
        </FlexPlus>
      </ContainerWithBg>
    )
  }
}

export default withTheme(Header)
