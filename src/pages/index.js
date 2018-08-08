import React from 'react'
import Landing from '../components/landing'
import About from '../components/about'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Contact from '../components/contact'

const IndexPage = ({data}) => (
  <div>
    <Landing />
    <About />
    <Experience />
    <Projects projects={data.allMarkdownRemark.edges} />
    <Contact />
  </div>
)

export default IndexPage

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            filter
            tech
            repo
            role
          }
          excerpt
        }
      }
    }
  }
`
