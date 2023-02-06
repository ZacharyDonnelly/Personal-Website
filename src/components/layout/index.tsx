import { FC } from 'react'
import Header from './header'

interface LayoutProps {
    children: JSX.Element
}

const Layout: FC<LayoutProps> = ({ children }) => (
    <>
        <Header />
        {children}
    </>
)

export default Layout
