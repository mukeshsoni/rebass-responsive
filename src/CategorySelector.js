import React, { Component } from "react"
import { Flex, Text, Box, Sticky, Divider } from "rebass"
import ListItem from "./ListItem.js"
import FontAwesome from "react-fontawesome"
import CategoryHeader from "./CategoryHeader.js"
import FullHeightFlex from "./FullHeightFlex"

function getCategoryName(categories, catId) {
  return categories.find(category => category.id === catId).name
}

export default class CategorySelector extends Component {
  state = {
    screen: "category",
    categoryId: null,
    subCategoryId: null
  }

  handleCategoryClick = categoryId => {
    this.setState({
      categoryId,
      screen: "subCategory"
    })
  }

  handleSubCategoryClick = subCategoryId => {
    this.props.onCategorySelect(this.state.categoryId, subCategoryId)
  }

  handleBackButtonClick = () => {
    this.setState({
      categoryId: null,
      screen: "category"
    })
  }

  headerContent() {
    if (this.state.screen === "category") {
      return (
        <Flex p={2}>
          <Text fontSize={2} mr={2} onClick={this.props.onCloseClick}>
            <FontAwesome name="close" inverse={true} />
          </Text>
          <Text>Categories</Text>
        </Flex>
      )
    } else {
      return (
        <Flex alignItems="center" p={2}>
          <Box mr={2} onClick={this.handleBackButtonClick}>
            <FontAwesome name="arrow-left" inverse={true} />
          </Box>
          <Text>Back to all categories</Text>
        </Flex>
      )
    }
  }
  getList() {
    const { categories } = this.props

    if (this.state.screen === "category") {
      return (
        <Box flex="1 0 auto" mt={3}>
          {categories.map(category => (
            <React.Fragment>
              <ListItem
                onClick={this.handleCategoryClick.bind(this, category.id)}
              >
                {category.name}
              </ListItem>
              <Divider w={1} color="lightblue" />
            </React.Fragment>
          ))}
        </Box>
      )
    } else {
      const selectedCategory = categories.find(
        category => category.id === this.state.categoryId
      )

      return (
        <Box flex="1 0 auto" mt={3}>
          {selectedCategory.subCategories.map(category => (
            <React.Fragment>
              <ListItem
                onClick={this.handleSubCategoryClick.bind(this, category.id)}
              >
                {category.name}
              </ListItem>
              <Divider w={1} color="lightblue" />
            </React.Fragment>
          ))}
        </Box>
      )
    }
  }

  render() {
    const { categories, onCategorySelect, onCloseClick } = this.props
    const { categoryId, screen } = this.state

    return (
      <FullHeightFlex flexDirection="column" height="100vh">
        <Sticky top={0} bg="white">
          <CategoryHeader
            onCloseClick={onCloseClick}
            onBackButtonClick={this.handleBackButtonClick}
            screen={screen}
          />
        </Sticky>
        {categoryId && (
          <Text p={2} fontWeight="bold">
            {getCategoryName(categories, categoryId)}
          </Text>
        )}
        {this.getList()}
      </FullHeightFlex>
    )
  }
}
