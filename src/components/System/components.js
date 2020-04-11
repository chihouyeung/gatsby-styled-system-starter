import styled from 'styled-components'

import { Link as GatsbyLink } from 'gatsby'
import {
  color,
  border,
  shadow,
  system,
  space,
  layout,
  flexbox,
  typography,
  position,
  variant,
  lineHeight,
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

export const Box = styled.div`
${flexbox}
  ${color}
  ${space}
  ${layout}
  ${position}
  ${border}
  ${shadow}
`

Box.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...layout.propTypes,
  ...position.propTypes,
  ...border.propTypes,
  ...shadow.propTypes,
}

const transform = system({
  textTransform: {
    property: 'textTransform',
  },
})

export const Text = styled.span`
  ${color}
  ${space}
  ${typography}
  ${transform}
`

export const Heading = styled.h1`
${color}
${space}
${typography}
${lineHeight}
${transform}
`

Heading.defaultProps = {
  fontSize: [5, 5, 6],
  fontWeight: 'heading',
  lineHeight: 'heading',
  color: 'darkgray',
}

export const Flexbox = styled(Box)`
  ${flexbox}
  display: flex;
`

export const Link = styled(GatsbyLink).withConfig({ shouldForwardProp })`
  ${flexbox}
  ${color}
  ${typography}
  ${space}
  ${layout}
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: currentColor;
  text-transform: uppercase;
`

export const Button = styled.button`
  ${color}
  ${space}
  ${layout}
  ${position}
  ${border}
  ${typography}
  ${variant({
    scale: 'buttons',
  })},

  :hover {
    cursor: pointer;
  }
`

Button.defaultProps = {
  variant: 'primary',
  border: 0,
  borderRadius: 2,
  p: [2, 3],
  minWidth: '100px',
  fontSize: [2, 3, 3],
}
