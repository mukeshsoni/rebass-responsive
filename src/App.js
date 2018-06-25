import React, { Component } from "react"
import "./App.css"
import { Flex } from "rebass"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./Header.js"
import Filters from "./Filters/Filters"
import DetailScreen from "./DetailScreen"
import SearchPage from "./SearchPage"
import ModalWithHeight from "./ModalWithHeight"
import listingData from "./listing_data.js"

class App extends Component {
  static contextTypes = {
    router: () => true // replace with PropTypes.object if you use them
  }

  state = {
    showFilterModal: false,
    selectedListingId: null
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

    return (
      <Router>
        <Flex flexDirection="column">
          <Header onFilterLinkClick={this.handleFilterLinkClick} />
          <Route
            exact={true}
            path="/"
            render={() => (
              <SearchPage onListingClick={this.handleListingClick} />
            )}
          />

          <Route
            exact={true}
            path="/ad/:adId"
            render={({ match }) => {
              return (
                <DetailScreen
                  listing={listingData.find(
                    listing => listing.id === +match.params.adId
                  )}
                />
              )
            }}
          />
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
