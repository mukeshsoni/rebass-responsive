import React, { Component } from "react"
import { Flex, Text, Heading, Box, Button, Sticky, Divider } from "rebass"
import ListItem from "./ListItem.js"

const FullWidthButton = Button.extend`
  width: 100%;
  border-radius: 0;
  min-height: 100%;
`

const FullHeightFlex = Flex.extend`
  height: 100vh;
`

const categories2 = [
  "sports",
  "education",
  "electronics",
  "sports",
  "education",
  "electronics",
  "sports",
  "education",
  "electronics",
  "sports",
  "education",
  "electronics",
  "sports",
  "education",
  "electronics",
  "sports",
  "education",
  "electronics"
]

const categories = [
  {
    id: 1,
    name: "Books",
    subCategories: [
      { id: 1, name: "Hardcover" },
      { id: 2, name: "Paperback" },
      { id: 3, name: "Electronic" }
    ]
  },
  {
    id: 2,
    name: "Movies",
    subCategories: [
      { id: 4, name: "DVD" },
      { id: 5, name: "BluRay" },
      { id: 6, name: "Download" }
    ]
  },
  {
    id: 3,
    name: "Games",
    subCategories: [{ id: 7, name: "XBox" }, { id: 8, name: "PC" }]
  },
  { id: 4, name: "Music" }
]

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
            X
          </Text>
          <Text>Categories</Text>
        </Flex>
      )
    } else {
      return (
        <Flex alignItems="center" p={2}>
          <Button mr={1} onClick={this.handleBackButtonClick}>
            Back
          </Button>
          <Text>Back to all categories</Text>
        </Flex>
      )
    }
  }
  getList() {
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

  getCategoryName() {
    return categories.find(category => category.id === this.state.categoryId)
      .name
  }

  render() {
    const { onCategorySelect } = this.props
    const { categoryId } = this.state

    return (
      <FullHeightFlex flexDirection="column" height="100vh">
        <Sticky top={0} bg="white">
          {this.headerContent()}
        </Sticky>
        {categoryId && (
          <Text p={2} fontWeight="bold">
            {this.getCategoryName()}
          </Text>
        )}
        {this.getList()}
      </FullHeightFlex>
    )
  }
}
