import React from 'react'
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import StyledTheme from "./theme"

export default ({ element }) => (
  <StyledThemeProvider theme={StyledTheme}>{element}</StyledThemeProvider>
)
