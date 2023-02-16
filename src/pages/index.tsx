import Canvas from '@/components/base/canvas'
import { avatar, name } from '@/lib/info'
import useIsMobile from '@/lib/utils/hooks/useIsMobile'
import styles from '@/styles/home.module.scss'
import Head from 'next/head'
import { default as NextImage } from 'next/image'
import { ReactElement } from 'react'

const Home: React.FC = (): ReactElement => {
    const isMobile = useIsMobile()
    const width = 1920
    const height = 200
    const src = 'https://res.cloudinary.com/dqs1n4hjy/image/upload/v1676521026/canvas_cloud.png'

    // TODO: Move to seperate file and refactor
    const drawCanvas = (ctx: CanvasRenderingContext2D | null) => {
        const image = new Image()

        // Animation values
        const startX = 1265 // starting x coordinate
        const startY = -410 // starting y coordinate
        const minX = -120 // minimum x coordinate
        const maxY = -195 // minimum y coordinate to match nav border
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
                <title>Zach Donnelly</title>
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
                        <h2>Hi there! 👋 I&apos;m</h2>
                        <h1>Zach</h1>
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
