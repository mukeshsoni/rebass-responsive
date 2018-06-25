import React, { Component } from "react"
import { Box } from "rebass"
import { Link } from "react-router-dom"
import Listing from "./Listing.js"

export default class Listings extends Component {
  getListings() {
    return this.props.data.map((listing, index) => {
      return (
        <Link to={`/ad/${listing.id}`}>
          <Listing
            listing={listing}
            key={index}
            onClick={this.props.onListingClick.bind(this, listing.id)}
          />
        </Link>
      )
    })
  }

  render() {
    return (
      <Box width="100%" mt={10}>
        {this.getListings()}
      </Box>
    )
  }
}
