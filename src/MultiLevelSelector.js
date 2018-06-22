import React, { Component } from "react"
import { Text, Box, Sticky, Divider } from "rebass"
import ListItem from "./ListItem.js"
import MultiLevelSelectHeader from "./MultiLevelSelectHeader"
import FullHeightFlex from "./FullHeightFlex"

function getTopLevelName(data, id) {
  return data.find(item => item.id === id).name
}

export default class MultiLevelSelector extends Component {
  state = {
    screen: 1,
    selectedIds: []
  }

  handleItemClick = id => {
    if (this.state.selectedIds.length === 1) {
      this.props.onItemSelection(this.state.selectedIds.concat(id))
    } else {
      this.setState({
        selectedIds: this.state.selectedIds.concat(id),
        screen: 2
      })
    }
  }

  handleBackButtonClick = () => {
    this.setState({
      selectedIds: [],
      screen: 1
    })
  }

  getList() {
    const { data } = this.props

    if (this.state.screen === 1) {
      return (
        <Box flex="1 0 auto" mt={3}>
          {data.map((item, index) => (
            <React.Fragment>
              <ListItem onClick={this.handleItemClick.bind(this, item.id)}>
                {item.name}
              </ListItem>
              <Divider w={1} color="lightblue" />
            </React.Fragment>
          ))}
        </Box>
      )
    } else {
      const selectedItem = data.find(
        item => item.id === this.state.selectedIds[0]
      )

      return (
        <Box flex="1 0 auto" mt={3}>
          {selectedItem.subCategories.map((item, index) => (
            <React.Fragment>
              <ListItem onClick={this.handleItemClick.bind(this, item.id)}>
                {item.name}
              </ListItem>
              <Divider w={1} color="lightblue" />
            </React.Fragment>
          ))}
        </Box>
      )
    }
  }

  render() {
    const { data, onCloseClick, headers } = this.props
    const { selectedIds, screen } = this.state

    return (
      <FullHeightFlex flexDirection="column" height="100vh">
        <Sticky top={0} bg="white">
          <MultiLevelSelectHeader
            header={headers[0]}
            screen={screen}
            onCloseClick={onCloseClick}
            onBackButtonClick={this.handleBackButtonClick}
          />
        </Sticky>
        {selectedIds.length > 0 && (
          <Text p={2} fontWeight="bold">
            {getTopLevelName(data, selectedIds[0])}
          </Text>
        )}
        {this.getList()}
      </FullHeightFlex>
    )
  }
}
