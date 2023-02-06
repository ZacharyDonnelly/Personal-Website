import { FC } from 'react'
import Nav from './navbar'

interface LayoutProps {
    children: JSX.Element
}

const Layout: FC<LayoutProps> = ({ children }) => (
    <>
        <Nav />
        {children}
    </>
)

export default Layout
