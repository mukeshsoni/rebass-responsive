import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { Provider } from "rebass"
import registerServiceWorker from "./registerServiceWorker"

const theme = {
  colors: {
    brand: "#159777",
    subdue: "",
    dark: "#1c281c"
  }
}

ReactDOM.render(
  <Provider theme={theme}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
