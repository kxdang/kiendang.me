// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

//Implementation of Dark Mode Switch
import React from "react"

import { ThemeProvider } from "./src/context/ThemeContext"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)

//Implementation of PrismJS
require("prismjs/themes/prism-tomorrow.css")

//Implementation of line numbering - add {numberLines: boolean} next to language call
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
