import React, { Component } from "react"
import "./App.css"
import { Modal, Flex, Box, Text } from "rebass"
import { width, height } from "styled-system"
import Listings from "./Listings.js"
import Header from "./Header.js"
import SearchRow from "./SearchRow.js"
import MultiLevelSelector, { getItemFromPath } from "./MultiLevelSelector"
import Filters from "./Filters/Filters"
import HideOnMobile from "./HideOnMobile.js"
import categories from "./categories"
import locations from "./locations.js"
import DetailScreen from "./DetailScreen"
import FlexPlus from "./FlexPlus.js"

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

const ModalWithHeight = Modal.extend`
  ${height};
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding: 0;
  border-radius: 0;
`

function getSubCategoryName(categories, catId, subCatId) {
  const category = categories.find(category => category.id === catId)
  return category.subCategories.find(subCat => subCat.id === subCatId).name
}

function getFilteredData(data, searchString) {
  if (!searchString) {
    return data
  }

  return data.filter(
    listing =>
      listing.title.toLowerCase().includes(searchString.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchString.toLowerCase()) ||
      listing.category.toLowerCase().includes(searchString.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchString.toLowerCase())
  )
}

class App extends Component {
  state = {
    showCategoryModal: false,
    showFilterModal: false,
    showLocationModal: false,
    categoryPath: [],
    locationPath: [],
    selectedListingId: null,
    searchString: ""
  }

  handleCategoryButtonClick = () => {
    this.setState({ showCategoryModal: true })
  }

  applyCategoryFilter = categoryPath => {
    this.setState({ categoryPath, showCategoryModal: false })
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

  handleLocationButtonClick = () => {
    this.setState({ showLocationModal: true })
  }

  applyLocationFilter = locationPath => {
    this.setState({ locationPath, showLocationModal: false })
  }

  handleLocationModalCloseClick = () => {
    this.setState({ showLocationModal: false })
  }

  handleListingClick = listingId => {
    this.setState({ selectedListingId: listingId })
  }

  handleDetailsScreenBackClick = () => {
    this.setState({ selectedListingId: null })
  }

  handleSearchInput = e => {
    this.setState({ searchString: e.target.value })
  }

  render() {
    const {
      showCategoryModal,
      showLocationModal,
      showFilterModal,
      categoryPath,
      locationPath,
      selectedListingId,
      searchString
    } = this.state

    if (Number.isInteger(selectedListingId)) {
      return (
        <DetailScreen
          onBackClick={this.handleDetailsScreenBackClick}
          listing={data.find(listing => listing.id === selectedListingId)}
        />
      )
    }

    return (
      <Flex flexDirection="column">
        <Header onFilterLinkClick={this.handleFilterLinkClick} />
        <FlexPlus
          flexDirection="column"
          width="100%"
          maxWidth={1156}
          margin="auto"
          background="white"
          p={[0, 0, 4]}
        >
          <SearchRow
            category={
              categoryPath.length > 0 &&
              getItemFromPath(categories, categoryPath).name
            }
            location={
              locationPath.length > 0 &&
              getItemFromPath(locations, locationPath).name
            }
            onCategoryButtonClick={this.handleCategoryButtonClick}
            onLocationButtonClick={this.handleLocationButtonClick}
            onInput={this.handleSearchInput}
          />
          <Flex mt={2} p={1}>
            <Text>Results: </Text>
            <Text fontWeight="bold">1234</Text>
          </Flex>
          <Flex width="100%">
            <HideOnMobile flex={[null, 3, 3, 3]}>
              <Filters />
            </HideOnMobile>
            <Box flex={[null, 6, 7, 8]} width="100%">
              <Listings
                data={getFilteredData(data, searchString)}
                onListingClick={this.handleListingClick}
              />
            </Box>
          </Flex>
          {showCategoryModal && (
            <ModalWithHeight
              bg="white"
              width={["100vw", "80vw"]}
              height={["100vh", "auto"]}
            >
              <MultiLevelSelector
                listType="Categories"
                data={categories}
                onCloseClick={this.handleCategoryModalCloseClick}
                onItemSelection={this.applyCategoryFilter}
              />
            </ModalWithHeight>
          )}
          {showLocationModal && (
            <ModalWithHeight
              bg="white"
              width={["100vw", "80vw"]}
              height={["100vh", "auto"]}
            >
              <MultiLevelSelector
                listType="Locations"
                data={locations}
                onCloseClick={this.handleLocationModalCloseClick}
                onItemSelection={this.applyLocationFilter}
              />
            </ModalWithHeight>
          )}
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
        </FlexPlus>
      </Flex>
    )
  }
}

export default App
