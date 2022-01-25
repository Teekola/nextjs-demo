import Head from 'next/head'
import Footer from './footer'
import Navbar from './navbar'
import styled from 'styled-components'

export const siteTitle = 'Next.js Demo Website'

const StyledLayout = styled.div`
    height: 100%;
    min-height: 100vh;
    
    main {
        margin: 0 auto;
        padding: 0 1rem;
        max-width: 1210px;
    }
    
`

export default function Layout({ children }) {
    return (
        <StyledLayout data-scroll-section>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Demo website built using Next.js" />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </StyledLayout>
    )
}