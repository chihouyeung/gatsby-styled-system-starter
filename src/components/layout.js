import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from 'components/Header'
import Footer from 'components/Footer'
import { Box } from 'components/System'
import { GlobalStyle } from 'store/theme'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <> 
      <GlobalStyle/>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box maxWidth="1040px" minHeight="calc(100vh - 96px)" mx="auto" p={3}>
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
