import React, { PureComponent } from "react"
import { Text } from "rebass"
import FlexPlus from "../FlexPlus.js"
import SubduedColorButton from "../Button/SubduedColorButton.js"

export default class DetailScreenActions extends PureComponent {
  render() {
    return (
      <FlexPlus
        justifyContent="space-between"
        p={3}
        alignItems="center"
        borderBottom="1px solid #ececec"
        borderTop="1px solid #ececec"
        mb={3}
      >
        <SubduedColorButton>Edit Ad</SubduedColorButton>
        <Text color="#ececec">❘</Text>
        <SubduedColorButton>Delete Ad</SubduedColorButton>
        <Text color="#ececec">❘</Text>
        <SubduedColorButton>Report Ad</SubduedColorButton>
      </FlexPlus>
    )
  }
}
