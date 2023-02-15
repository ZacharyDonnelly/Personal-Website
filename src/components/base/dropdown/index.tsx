import { MenuItemProps } from '@/components/layout/header'
import { name } from '@/lib/info'
import cn from 'classnames'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactElement } from 'react'
import styles from './index.module.scss'

interface DropdownProps {
    items: MenuItemProps[]
    className: string
    active: boolean
}

// Dropdown container animation properties
const container = {
    hidden: { x: 0, y: 0 },
    show: {
        x: 0,
        y: 100,
        transition: {
            type: 'spring',
            stiffness: 200,
            bounce: 0.5,
            damping: 20,
            duration: 3,
            staggerChildren: 0.125
        }
    }
}

// Dropdown items animation properties
const listItem = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const Dropdown = ({ items, className, active }: DropdownProps): ReactElement => (
    <>
        {active && (
            <motion.div variants={container} animate="show" initial="hidden" className={cn(styles.dropdown, className)}>
                <ul>
                    {items.map((item: MenuItemProps, index: number) => (
                        <motion.li variants={listItem} key={index}>
                            <Link href={item.path} aria-label={`${name} ${item.title}`} role="link">
                                {item.title}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        )}
    </>
)

export default Dropdown
