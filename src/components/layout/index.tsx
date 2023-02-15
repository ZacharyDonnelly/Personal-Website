import { ReactElement } from 'react'
import Header from './header'

interface LayoutProps {
    children: JSX.Element
}

const Layout = ({ children }: LayoutProps): ReactElement => (
    <>
        <Header />
        {children}
    </>
)

export default Layout
