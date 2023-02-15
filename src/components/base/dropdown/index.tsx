import { MenuItemProps } from '@/components/layout/header'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'
import styles from './index.module.scss'

interface DropdownProps {
    items: MenuItemProps[]
    className: string
    active: boolean
}

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

const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

const Dropdown: FC<DropdownProps> = ({ items, className, active }) => (
    <>
        {active && (
            <AnimatePresence>
                <motion.div
                    variants={container}
                    animate="show"
                    initial="hidden"
                    className={cn(styles.dropdown, className)}
                >
                    <ul>
                        {items.map((item: MenuItemProps, index: number) => (
                            <motion.li variants={listItem} transition={{ duration: 1, ease: 'easeIn' }} key={index}>
                                <Link href={item.path} aria-label={`Zach Donnelly ${item.title}`} role="link">
                                    {item.title}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </AnimatePresence>
        )}
    </>
)

export default Dropdown
