import React, { Component } from "react"
import { Link, Heading, Flex, Box, Input, Text, Button, Space } from "rebass"
import { display } from "styled-system"
import FontAwesome from "react-fontawesome"

const HidableBox = Flex.extend`
  ${display};
  @media only screen and (min-width: 500px) {
    display: none;
  }
`

export default class Menu extends Component {
  state = { showMenu: false }

  handleHamburgerClick = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    const { showMenu } = this.state

    return (
      <Flex>
        <Flex onClick={this.handleHamburgerClick} flexDirection="column">
          <HidableBox mr={2}>
            <FontAwesome name="bars" />
          </HidableBox>
          <HidableBox
            flexDirection={["column", "row"]}
            display={showMenu ? "flex" : "none"}
          >
            <Link>All ads</Link>
            <Link>My Profile</Link>
          </HidableBox>
        </Flex>
      </Flex>
    )
  }
}
