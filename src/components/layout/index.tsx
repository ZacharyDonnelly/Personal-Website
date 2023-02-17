import { description, name } from '@/lib/info'
import { DropdownContext } from '@/lib/utils/context/DropdownContext'
import Head from 'next/head'
import { ReactElement, useState } from 'react'
import Header from './header'
interface LayoutProps {
  children: JSX.Element
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <DropdownContext.Provider value={isMenuOpen}>
      <Head>
        <link rel="icon" href="/assets/icons/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content={name} />
        <meta name="twitter:title" content={name} />

        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        <meta property="og:site_name" content={name} />
      </Head>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {children}
    </DropdownContext.Provider>
  )
}

export default Layout
