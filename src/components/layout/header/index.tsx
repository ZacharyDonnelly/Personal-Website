import useIsMobile from '@/lib/utils/hooks/useIsMobile'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useCallback, useState } from 'react'
import styles from './navbar.module.scss'

const Header: FC = () => {
    const isMobile = useIsMobile()
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const toggleMenu = useCallback<() => void>(() => {
        setIsMenuOpen(!isMenuOpen)
    }, [isMenuOpen])

    return (
        <header className={styles.header}>
            <div className={styles.navContainer}>
                <nav className={styles.logoContainer}>
                    <Link href="/" aria-label="Zach Donnelly" role="link">
                        <Image src="/assets/icons/logo_gfx.png" height={78} width={90} alt="Zach Donnelly" />
                    </Link>
                </nav>
                <nav className={styles.linkContainer}>
                    {!isMobile && (
                        <ul>
                            <li>
                                <Link href="/about" aria-label="About Zach Donnelly" role="link">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" aria-label="Zach Donnelly's Portfolio" role="link">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" aria-label="Contact Zach Donnelly" role="link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    )}
                    <button
                        className={cn(styles.hamburger, {
                            [styles.open]: isMenuOpen
                        })}
                        onClick={toggleMenu}
                        aria-label="Menu"
                    >
                        <div
                            className={cn(styles.lineTop, {
                                [styles.activeTop]: isMenuOpen
                            })}
                        />
                        <div
                            className={cn(styles.lineBottom, {
                                [styles.activeBottom]: isMenuOpen
                            })}
                        />
                    </button>
                </nav>
            </div>
        </header>
    )
}
export default Header
