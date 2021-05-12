import React from 'react'
import { Link } from 'gatsby'

import Layout from "../pages/components/layout"

const IndexPage = () => {

    return(
          <Layout>
              <h1>Hello,</h1>
              <h2>I'm Jarone, a full-stack developer living in beautiful Lehi, Utah.</h2>
              <button><Link to="/contact">Contact Me</Link></button>
          </Layout>
    )
}

export default IndexPage