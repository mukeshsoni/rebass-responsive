import React, { Component } from "react"
import "./App.css"
import { Modal, Flex, Box, Text } from "rebass"
import { height } from "styled-system"
import Listings from "./Listings.js"
import Header from "./Header.js"
import SearchRow from "./SearchRow.js"
import CategorySelector from "./CategorySelector.js"
import Filters from "./Filters/Filters"
import HideOnMobile from "./HideOnMobile.js"
import { getSubCategoryName } from "./categories"

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
  state = { showCategoryModal: false, showFilterModal: false }

  handleCategoryButtonClick = () => {
    this.setState({ showCategoryModal: true })
  }

  applyCategoryFilter = (categoryId, subCategoryId) => {
    this.setState({ categoryId, subCategoryId, showCategoryModal: false })
  }

  handleCategoryModalCloseClick = () => {
    this.setState({ showCategoryModal: false })
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
    const {
      showCategoryModal,
      showFilterModal,
      categoryId,
      subCategoryId
    } = this.state

    return (
      <Flex flexDirection="column">
        <Header onFilterLinkClick={this.handleFilterLinkClick} />
        {categoryId &&
          subCategoryId && (
            <Box p={2}>
              Selected Category: {getSubCategoryName(categoryId, subCategoryId)}
            </Box>
          )}
        <SearchRow onCategoryButtonClick={this.handleCategoryButtonClick} />
        <Box mt={2} p={1}>
          <Text>Results: 1234</Text>
        </Box>
        <Flex>
          <HideOnMobile flex={[null, 3, 3, 3]}>
            <Filters />
          </HideOnMobile>
          <Box flex={[null, 6, 7, 8]}>
            <Listings data={data} />
          </Box>
        </Flex>
        {showCategoryModal && (
          <ModalWithHeight
            bg="white"
            width={["100vw", "80vh"]}
            height={["100vh", "auto"]}
          >
            <CategorySelector
              onCloseClick={this.handleCategoryModalCloseClick}
              onCategorySelect={this.applyCategoryFilter}
            />
          </ModalWithHeight>
        )}
        {showFilterModal && (
          <ModalWithHeight
            bg="white"
            width={["100vw", "80vh"]}
            height={["100vh", "auto"]}
          >
            <Filters
              onBackClick={this.handleFilterModalBackClick}
              onApplyFilterClick={this.handleApplyFilterClick}
            />
          </ModalWithHeight>
        )}
      </Flex>
    )
  }
}

export default App
