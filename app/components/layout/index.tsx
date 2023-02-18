import { ReactElement, useState } from 'react'
import { DropdownContext } from '~/lib/utils/context/DropdownContext'
import Header from './header'

interface LayoutProps {
  children: JSX.Element
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <DropdownContext.Provider value={isMenuOpen}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {children}
    </DropdownContext.Provider>
  )
}

export default Layout
