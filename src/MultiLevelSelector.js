import React, { Component } from "react"
import { Flex, Text, Box, Sticky, Divider } from "rebass"
import ListItem from "./ListItem.js"
import MultiLevelSelectHeader from "./MultiLevelSelectHeader"
import FullHeightFlex from "./FullHeightFlex"

function getTopLevelName(data, id) {
  return data.find(item => item.id === id).name
}

export default class MultiLevelSelector extends Component {
  state = {
    selectedIds: []
  }

  handleItemClick = id => {
    if (this.state.selectedIds.length === 1) {
      this.props.onItemSelection(this.state.selectedIds.concat(id))
    } else {
      this.setState({
        selectedIds: this.state.selectedIds.concat(id)
      })
    }
  }

  handleBackButtonClick = () => {
    this.setState({
      selectedIds: []
    })
  }

  getListHeader(data, selectedIds) {
    // There will be a header only if the selection has moved beyond the first level
    if (selectedIds.length === 0) {
      return null
    } else {
      return (
        <Flex alignItems="center" flexWrap="wrap">
          {selectedIds
            .reduce((acc, selectedId) => {
              return acc
                .concat(
                  <Text p={2} fontWeight="bold" mb={3}>
                    {getTopLevelName(data, selectedId)}
                  </Text>
                )
                .concat("-")
            }, [])
            .slice(0, -1)}
        </Flex>
      )
    }
  }

  getList(data, selectedIds) {
    const itemsToRender = selectedIds.reduce((acc, selectedId) => {
      let items = acc.find(item => item.id === selectedId).subCategories
      return items
    }, data)

    return (
      <Box flex="1 0 auto" mt={3}>
        {this.getListHeader(data, selectedIds)}

        {itemsToRender.map((item, index) => (
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

  render() {
    const { data, onCloseClick, listType } = this.props
    const { selectedIds } = this.state

    return (
      <FullHeightFlex flexDirection="column" height="100vh">
        <Sticky top={0} bg="white">
          <MultiLevelSelectHeader
            listType={listType}
            selectedIds={selectedIds}
            onCloseClick={onCloseClick}
            onBackButtonClick={this.handleBackButtonClick}
          />
        </Sticky>
        {this.getList(data, selectedIds)}
      </FullHeightFlex>
    )
  }
}
