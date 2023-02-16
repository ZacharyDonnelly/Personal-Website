import Canvas from '@/components/base/canvas'
import { avatar, name, siteTitle } from '@/lib/info'
import useIsMobile from '@/lib/utils/hooks/useIsMobile'
import styles from '@/styles/home.module.scss'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { default as NextImage } from 'next/image'
import { ReactElement } from 'react'

const Home: React.FC = (): ReactElement => {
    const isMobile = useIsMobile()

    const mainHeading = `Hello, my name is ${name}.`.split('').map((word) => (word += '\u00A0'))
    const width = 1920
    const height = 200
    const src = 'https://res.cloudinary.com/zacharydonnelly/image/upload/v1676530403/canvas_cloud.png'

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    }

    const heading = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    // TODO: Move to seperate file and refactor
    const drawCanvas = (ctx: CanvasRenderingContext2D | null) => {
        const image = new Image()

        // Animation values
        const startX = 1265 // starting x coordinate
        const startY = -410 // starting y coordinate
        const minX = -120 // minimum x coordinate
        const maxY = -190 // minimum y coordinate to match nav border
        const speed = 45 // animation loop speed (lower is faster)
        const end = startY + 50 // end of canvas - reset to start

        let x = startX // track/adjust x coordinate
        let y = startY // track/adjust y coordinate

        /**
         * Animate sprite across border of header
         * Takes in x & y coordinates
         * Moves sprite to end of canvas & starts new animation
         * @returns {void} Only animates sprite
         */
        const drawScreen = (): void => {
            ctx?.save() // save current canvas state
            ctx?.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height) // clear canvas
            ctx?.drawImage(image, x, y) // draw image at current position
            ctx?.restore() // restore previous canvas state

            // move sprite along x axis
            x -= 4

            // make sure we are still off screen and lower sprite to position
            if (y <= maxY && x > minX) {
                // move sprite down y axis
                y += 4
            }

            // check to see if we have reached end of nav border and raise sprite off screen
            if (x <= minX) {
                // move sprite up y axis
                y -= 2

                // reset sprite position
                if (y <= end) {
                    // reset x,y coordinates
                    x = startX
                    y = startY
                }
            }
        }

        image.src = src
        // Set refresh rate
        image.onload = () => setInterval(() => requestAnimationFrame(drawScreen), speed)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>{name + siteTitle}</title>
                <meta property="og:image" content={src} />
                <meta property="og:image:width" content="1024" />
                <meta property="og:image:height" content="608" />
                <meta property="og:image:secure_url" content={src} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:image" content={src} />
                <meta name="application-name" content="zachdonnelly.com" />
                <meta property="author" content={name} />
            </Head>
            <section className={styles.canvasContainer}>
                {!isMobile && (
                    <div className={styles.canvas}>
                        <Canvas draw={drawCanvas} height={height} width={width} className={styles.canvas} />
                    </div>
                )}
            </section>
            <section className={styles.hero}>
                <div className={styles.content}>
                    <header>
                        <h3>
                            <motion.span variants={container} initial="hidden" animate="show">
                                {mainHeading.map((char, i: number) => (
                                    <motion.span key={i} aria-hidden="true" variants={heading}>
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.span>
                        </h3>
                    </header>
                </div>
                <div className={styles.imgContainer}>
                    <NextImage className={styles.avatar} src={avatar} height={500} width={600} alt={name} priority />
                </div>
            </section>
        </div>
    )
}

export default Home
