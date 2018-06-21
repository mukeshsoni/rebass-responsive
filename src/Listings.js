import React, { Component } from "react";
import { Box, Flex, Text } from "rebass";
import Listing from "./listing.js";

export default class Listings extends Component {
  getListings() {
    return this.props.data.map((listing, index) => {
      return <Listing listing={listing} key={index} />;
    });
  }

  render() {
    return <Box mt={10}>{this.getListings()}</Box>;
  }
}
