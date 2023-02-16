import { name } from '@/lib/info'
import { Variants } from 'framer-motion'

type Hidden = { opacity: number }

type Show = { opacity: number; transition?: { staggerChildren: number } }

interface AnimationProps extends Variants {
    hidden: Hidden
    show: Show
}

class HomePageTextAnimations {
    container: AnimationProps

    heading: AnimationProps

    mainHeading: string[]

    constructor() {
        this.container = {
            hidden: { opacity: 0 },
            show: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.05
                }
            }
        }

        this.heading = {
            hidden: { opacity: 0 },
            show: { opacity: 1 }
        }

        this.mainHeading = `Hello, my name is ${name}.`.split('').map((word) => (word += '\u00A0'))
    }
}

export default HomePageTextAnimations
