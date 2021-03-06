import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import { Layout, PageTitle, SEO } from '../components/index'
import { rhythm, scale } from '../utils/typography'

class Uses extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const pageContent = data.allMarkdownRemark.edges[0].node.html

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Uses"
          keywords={[`uses`, `gatsby`, `javascript`, `react`]}
        />
        <PageTitle title="/uses" link="uses" />
        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      </Layout>
    )
  }
}

export default Uses

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/uses/" } }) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
          }
        }
      }
    }
  }
`
