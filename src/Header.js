import React, { Component } from "react"
import { Link, Flex, Box, Text, ButtonTransparent } from "rebass"
import ContainerWithBg from "./ContainerWithBg"
import Menu from "./Menu.js"
import HideOnMobile from "./HideOnMobile"
import HideOnNonMobile from "./HideOnNonMobile"
import FontAwesome from "react-fontawesome"
import YellowButton from "./Button/YellowButton.js"

const Logo = () => (
  <Link href="#!">
    <Text color="white">Ikman</Text>
  </Link>
)

export default class Header extends Component {
  render() {
    return (
      <ContainerWithBg
        p={2}
        justifyContent="space-between"
        bg="#159777"
        alignItems="center"
      >
        <Flex>
          <Menu />
          <Logo />
        </Flex>
        <Flex alignItems="center">
          <HideOnNonMobile mr={2}>
            <ButtonTransparent onClick={this.props.onFilterLinkClick}>
              <FontAwesome name="filter" />
            </ButtonTransparent>
          </HideOnNonMobile>
          <Box mr={3}>
            <FontAwesome name="comments" />
          </Box>
          <HideOnMobile>
            <YellowButton>Post your ad</YellowButton>
          </HideOnMobile>
        </Flex>
      </ContainerWithBg>
    )
  }
}
