import React, { Component } from "react";
import { Link, Heading, Flex, Box, Input, Text, Button, Space } from "rebass";
import { display } from "styled-system";

const HidableBox = Flex.extend`
  ${display};
`;

export default class Menu extends Component {
  state = { showMenu: false };

  handleHamburgerClick = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const { showMenu } = this.state;

    return (
      <Flex>
        <Flex onClick={this.handleHamburgerClick}>
          <Text>--</Text>
          <HidableBox
            flexDirection={["column", "row"]}
            display={showMenu ? "flex" : "none"}
          >
            <Link>All ads</Link>
            <Link>My Profile</Link>
          </HidableBox>
        </Flex>
      </Flex>
    );
  }
}
