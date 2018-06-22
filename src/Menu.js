import React, { Component } from "react"
import { Link, Flex } from "rebass"
import FontAwesome from "react-fontawesome"
import HideOnMobile from "./HideOnMobile"
import HideOnNonMobile from "./HideOnNonMobile"

export default class Menu extends Component {
  state = { showMenuOnMobile: false }

  handleHamburgerClick = () => {
    this.setState({ showMenuOnMobile: !this.state.showMenuOnMobile })
  }

  getHidableLinks() {
    return (
      <Flex flexDirection={["column", "row"]} mr={2}>
        <Link>All ads</Link>
        <Link>My Profile</Link>
      </Flex>
    )
  }

  render() {
    const { showMenuOnMobile } = this.state

    return (
      <Flex>
        <Flex onClick={this.handleHamburgerClick} flexDirection="column">
          <HideOnNonMobile mr={2}>
            <FontAwesome name="bars" />
          </HideOnNonMobile>
          <HideOnMobile flexDirection={["column", "row"]} mr={2}>
            {this.getHidableLinks()}
          </HideOnMobile>
          {showMenuOnMobile && this.getHidableLinks()}
        </Flex>
      </Flex>
    )
  }
}
