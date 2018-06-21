import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Modal, Heading, Flex, Box, Input, Text, Button, Space } from "rebass"
import { height } from "styled-system"
import Listings from "./Listings.js"
import Header from "./Header.js"
import SearchRow from "./SearchRow.js"
import CategorySelector from "./CategorySelector.js"

const data = [
  {
    title: "Toyota Aqua 2014",
    description: "3450km",
    location: "Colombo",
    category: "Cars and Vehicles",
    price: 15000,
    topAd: true
  },
  {
    title: "Hoverboard",
    description: "",
    location: "Kandy",
    category: "Sports and kids items",
    price: 55995,
    topAd: false
  },
  {
    title: "Daikin air conditioner",
    description: "",
    location: "Ratmalana",
    category: "Electronics",
    price: 77000,
    topAd: false
  },
  {
    title: "L. G. Regrigerator",
    description: "",
    location: "Anuradhapura",
    category: "Electronics",
    price: 13400,
    topAd: false
  },
  {
    title: "L. G. Regrigerator",
    description: "",
    location: "Anuradhapura",
    category: "Electronics",
    price: 13400,
    topAd: false
  },
  {
    title: "L. G. Regrigerator",
    description: "",
    location: "Anuradhapura",
    category: "Electronics",
    price: 13400,
    topAd: false
  }
]

const ModalWithHeight = Modal.extend`
  ${height};
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding: 0;
  border-radius: 0;
`

class App extends Component {
  state = { showCategoryModal: true }

  handleCategoryButtonClick = () => {
    this.setState({ showCategoryModal: true })
  }

  applyCategoryFilter = (categoryId, subCategoryId) => {
    this.setState({ categoryId, subCategoryId, showCategoryModal: false })
  }

  handleCategoryModalCloseClick = () => {
    this.setState({ showCategoryModal: false })
  }

  render() {
    const { showCategoryModal } = this.state

    return (
      <Flex flexDirection="column">
        <Header />
        <SearchRow onCategoryButtonClick={this.handleCategoryButtonClick} />
        <Box mt={2} p={1}>
          <Text>Results: 1234</Text>
        </Box>
        <Listings data={data} />
        {showCategoryModal && (
          <ModalWithHeight bg="white" width="100vw" height="100vh">
            <CategorySelector
              onCloseClick={this.handleCategoryModalCloseClick}
              onCategorySelect={this.applyCategoryFilter}
            />
          </ModalWithHeight>
        )}
      </Flex>
    )
  }
}

export default App
