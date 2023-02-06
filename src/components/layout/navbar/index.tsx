import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './navbar.module.scss'

const Nav: FC = () => (
    <header className={styles.header}>
        <div className={styles.container}>
            <nav className={styles.logo}>
                <Link href="/" aria-label="zach donnelly" target="_blank" role="link">
                    <Image src="/logo.png" height={82} width={95} alt="zach donnelly" />
                </Link>
            </nav>
            <nav className={styles.links}>
                <Link href="/about" aria-label="zach donnelly" target="_blank" role="link">
                    About
                </Link>
                <Link href="/portfolio" aria-label="zach donnelly" target="_blank" role="link">
                    Portfolio
                </Link>
                <Link href="/contact" aria-label="zach donnelly" target="_blank" role="link">
                    Contact
                </Link>
            </nav>
        </div>
    </header>
)

export default Nav
