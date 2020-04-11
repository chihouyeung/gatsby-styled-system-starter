import PropTypes from 'prop-types'
import React from 'react'
import { Box, Link, Flexbox, Text } from 'components/System'

const Header = ({ siteTitle }) => {
  return (
    <Box
      as="header"
      p={2}
      position="sticky"
      top={0}
      zIndex={200}
      color="#fff"
      bg="darkgray">
      <Flexbox
        as="nav"
        justifyContent="space-between"
        maxWidth="1040px"
        mx="auto"
        px={3}>
        <Link to="/">
          <Text color="#fff" fontWeight="300">
            {siteTitle}
          </Text>
        </Link>
        <Flexbox>
          <Link to="/" ml={4}>
            <Text>Home</Text>
          </Link>
        </Flexbox>
      </Flexbox>
    </Box>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
