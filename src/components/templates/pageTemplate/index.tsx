import React from 'react'
import Head from 'next/head'
import Header from '../header'
import Footer from '../footer'
import { NavLinkProps } from '../../../types/types'
import { Box } from '@chakra-ui/react'
import NextWhatsIcon from '../../atoms/nextWhatsIcon'

type Props = {
  children: React.ReactNode,
  menuLinks: Record<string, NavLinkProps>[]
}

const PageTemplate = ({
  children,
  menuLinks
}: Props) => {
  const urlLogo = 'assets/img/logos/logo_reduzida.png'

  return (
    <>
      <Head>
        <title>EiMilhas</title>
        <meta name="author" content="NeXTIME"></meta>
        <meta name="description" content="EiMilhas, encontre sua passagem ideal com o maior desconto!" />
        <meta name="keywords" content="milhas, viagem, voar, passagem, avião, trip" />
        <meta property="og:title" content="milhas, viagem, voar, passagem, avião, trip" />
        <meta property="og:type" content="company" />
        <meta property="og:image" content="https://www.eimilhas.com.br/assets/img/mala.jpg"/>
        <meta property="og:url" content="https://www.eimilhas.com.br/"/>
        <meta property="og:site_name" content="Ei Milhas"/>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Saira:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <Header
          urlLogo={urlLogo}
          menuLinks={menuLinks}
        />

        <main>
          {children}
        </main>

        <footer>
          <Footer
            urlLogo={urlLogo}
          />
        </footer>

        <Box
          position="fixed"
          width="60px"
          height="60px"
          zIndex={100}
          bottom="20px"
          right="20px"
        >
          <a
            href="https://api.whatsapp.com/send?phone=5531988715354&text=Ol%C3%A1,%20Eimilhas!"
            target="_blank"
            rel="noreferrer"
          >
            <NextWhatsIcon />
          </a>
        </Box>
      </div>
    </>
  )
}

export default PageTemplate
