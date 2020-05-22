/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
   </div>   
   // <Image
  //  </div>      alt={author.name}
  //  </div>      style={{
  //  </div>        marginRight: rhythm(1 / 2),
  //  </div>        marginBottom: 0,
  //  </div>        minWidth: 50,
  //  </div>        borderRadius: `100%`,
  //  </div>      }}
//  </div>        imgStyle={{
//  </div>          borderRadius: `50%`,
//  </div>    </div>      }}
//  </div>      />
//  </div>      <p>
 //  </div>       Written by <strong>{author.name}</strong> {author.summary}
//  </div>  </div>       {` `}
//  </div>        <a href={`https://twitter.com/${social.twitter}`}>
//  </div>        // 
//  </div>        </a>
//  </div>      </p>
//  </div>    </div>
//  </div>  )
//  </div>}


 // export default Bio
