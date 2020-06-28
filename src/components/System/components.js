import styled from "styled-components"

import { Link as GatsbyLink } from "gatsby"
import {
  color,
  space,
  layout,
  flexbox,
  typography,
} from "styled-system"
import shouldForwardProp from "@styled-system/should-forward-prop"

export const Link = styled(GatsbyLink).withConfig({ shouldForwardProp })`
  ${flexbox}
  ${color}
  ${typography}
  ${space}
  ${layout}
  text-decoration: none;
  color: currentColor;
  text-transform: uppercase;

  :visited,:active {
    color: currentColor;
  }
`

Link.defaultProps = {
  display: 'flex',
  justifyContent: 'center',
}
