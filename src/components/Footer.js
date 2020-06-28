import React from 'react'
import { Box, Flexbox, Text } from '@ballchy/styled-bits'

const Footer = () => {
  return (
    <Box as="footer" width={1} color="#fff" bg="darkgray" py={3}>
      <Flexbox maxWidth="1040px" mx="auto">
        <Text>© Chi Hou Yeung</Text>
      </Flexbox>
    </Box>
  )
}

export default Footer
