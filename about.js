import React from 'react'
import { Link } from 'gatsby'
import Layout from "../pages/components/layout"


const AboutPage = () => {
    return (
            <Layout>
            <h1>About</h1>
            <p>I am currently a Web Design & Fulfillment Specialist at Boostability.</p>
            <button><Link to="/contact">Contact Me</Link></button>
            </Layout> 
    )
}

export default AboutPage;