import React, { Component } from "react"
import { Link, Heading, Flex, Box, Input, Text, Button, Space } from "rebass"
import { color } from "styled-system"
import Menu from "./Menu.js"

const Logo = () => (
  <Link href="#!">
    <Text color="white">Ikman</Text>
  </Link>
)

const ContainerWithBg = Flex.extend`
  ${color};
`

const HidableBox = Flex.extend`
  display: flex;
  @media only screen and (min-width: 700px) {
    display: none;
  }
`

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
          <HidableBox mr={2}>
            <Link onClick={this.props.onFilterLinkClick}>Filter</Link>
          </HidableBox>
          <Button>Post Ad</Button>
        </Flex>
      </ContainerWithBg>
    )
  }
}
