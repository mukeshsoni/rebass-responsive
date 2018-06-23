import React, { Component } from "react"
import { Link, Flex, Drawer, Divider } from "rebass"
import FontAwesome from "react-fontawesome"
import HideOnMobile from "./HideOnMobile.js"
import HideOnNonMobile from "./HideOnNonMobile.js"
import YellowButton from "./Button/YellowButton.js"
import SubduedText from "./Text/SubduedText.js"
// import Drawer from './Drawer.js'

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
            <FontAwesome name="bars" inverse={true} />
          </HideOnNonMobile>
          <HideOnMobile flexDirection={["column", "row"]} mr={2}>
            {this.getHidableLinks()}
          </HideOnMobile>
          <Drawer
            open={showMenuOnMobile}
            bg="dark"
            position="left"
            color="white"
          >
            <Flex flexDirection="column" p={2}>
              <YellowButton mb={3}>Post your ad</YellowButton>
              <SubduedText>ADS</SubduedText>
              <Divider w={1} />
              <Link>All ads</Link>
              <Link>Post your ad</Link>
            </Flex>
          </Drawer>
        </Flex>
      </Flex>
    )

    // {showMenuOnMobile && this.getHidableLinks()}
  }
}
