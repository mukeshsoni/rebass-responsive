import React, { Component } from "react"
import "./App.css"
import { Flex } from "rebass"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./Header.js"
import Filters from "./Filters/Filters"
import DetailScreen from "./DetailScreen"
import SearchPage from "./SearchPage"
import ModalWithHeight from "./ModalWithHeight"

let data = [
  {
    id: 0,
    title: "Toyota Aqua 2014",
    description:
      "J1 nxt prime for sale or ex can give a power bank and 2 headsets free plz whats up me or send a msg in ikamn",
    topAd: true,
    location: "Colombo",
    category: "Cars and Vehicles",
    price: 15000
  },
  {
    id: 1,
    title: "Hoverboard",
    description: "",
    location: "Kandy",
    category: "Sports and kids items",
    price: 55995,
    topAd: false
  },
  {
    id: 2,
    title: "Daikin air conditioner",
    description: "",
    location: "Ratmalana",
    category: "Electronics",
    price: 77000,
    topAd: false
  },
  {
    id: 3,
    title: "L. G. Regrigerator",
    description: "",
    location: "Anuradhapura",
    category: "Electronics",
    price: 13400,
    topAd: false
  },
  {
    id: 4,
    title: "L. G. Regrigerator",
    description: "",
    location: "Anuradhapura",
    category: "Electronics",
    price: 13400,
    topAd: false
  },
  {
    id: 5,
    title: "L. G. Regrigerator",
    description: "",
    location: "Anuradhapura",
    category: "Electronics",
    price: 13400,
    topAd: false
  }
]

data = data.map(listing => {
  return Object.assign({}, listing, {
    attributes: {
      Brand: "Toyota",
      Model: "Carina",
      "Model Year": 1997,
      Condition: "Used",
      Transmission: "Automatic",
      "Body type": "Saloon",
      "Fuel type": "Diesel",
      "Engine capacity": "2,000 cc",
      Mileage: "200,000 km"
    }
  })
})

class App extends Component {
  state = {
    showFilterModal: false,
    selectedListingId: null
  }

  handleDetailsScreenBackClick = () => {
    this.setState({ selectedListingId: null })
  }

  handleListingClick = listingId => {
    this.setState({ selectedListingId: listingId })
  }

  handleFilterLinkClick = () => {
    this.setState({ showFilterModal: true })
  }

  handleApplyFilterClick = filters => {
    this.setState({ showFilterModal: false })
  }

  handleFilterModalBackClick = () => {
    this.setState({ showFilterModal: false })
  }

  render() {
    const { selectedListingId, showFilterModal } = this.state

    if (Number.isInteger(selectedListingId)) {
      return (
        <DetailScreen
          onBackClick={this.handleDetailsScreenBackClick}
          listing={data.find(listing => listing.id === selectedListingId)}
        />
      )
    }

    return (
      <Router>
        <Flex flexDirection="column">
          <Header onFilterLinkClick={this.handleFilterLinkClick} />
          <SearchPage data={data} onListingClick={this.handleListingClick} />
          {showFilterModal && (
            <ModalWithHeight
              bg="white"
              width={["100vw", "80vw"]}
              height={["100vh", "auto"]}
            >
              <Filters
                onBackClick={this.handleFilterModalBackClick}
                onApplyFilterClick={this.handleApplyFilterClick}
              />
            </ModalWithHeight>
          )}
        </Flex>
      </Router>
    )
  }
}

export default App
