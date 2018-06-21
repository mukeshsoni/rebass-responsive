import React, { Component } from "react";
import { Link, Heading, Flex, Box, Input, Text, Button, Space } from "rebass";
import { color } from "styled-system";
import Menu from "./Menu.js";

const Logo = () => (
  <Link href="#!">
    <Text color="white">Ikman</Text>
  </Link>
);

const ContainerWithBg = Flex.extend`
  ${color};
`;

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
          <Flex mr={2}>
            <Link href="#filter">Filter</Link>
          </Flex>
          <Button>Post Ad</Button>
        </Flex>
      </ContainerWithBg>
    );
  }
}
