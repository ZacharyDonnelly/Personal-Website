import Dropdown from '@/components/base/dropdown'
import useIsMobile from '@/lib/utils/hooks/useIsMobile'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactElement, useCallback, useState } from 'react'
import styles from './index.module.scss'

export interface MenuItemProps {
    title: string
    path: string
}

const MenuItems: MenuItemProps[] = [
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Portfolio',
        path: '/portfolio'
    },
    {
        title: 'Contact',
        path: '/contact'
    }
]

const Header: FC = (): ReactElement => {
    const isMobile = useIsMobile()
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const toggleMenu = useCallback<() => void>(() => {
        setIsMenuOpen(!isMenuOpen)
    }, [isMenuOpen])

    return (
        <>
            <header className={styles.header}>
                <div className={styles.navContainer}>
                    <Dropdown items={MenuItems} active={isMenuOpen} className={styles.navDropdown} />
                    <nav className={styles.logoContainer}>
                        <Link href="/" aria-label="Zach Donnelly" role="link">
                            {!isMenuOpen ? (
                                <Image src="/assets/icons/logo_gfx.png" height={78} width={90} alt="Zach Donnelly" />
                            ) : (
                                <Image
                                    src="/assets/icons/logo_gfx_black.png"
                                    height={78}
                                    width={90}
                                    alt="Zach Donnelly"
                                />
                            )}
                        </Link>
                    </nav>
                    <nav className={styles.linkContainer}>
                        {!isMobile && !isMenuOpen && (
                            <ul>
                                {MenuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.path} aria-label={`Zach Donnelly ${item.title}`} role="link">
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
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
        </>
    )
}
export default Header
