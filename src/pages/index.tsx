import Canvas from '@/components/base/canvas'
import useIsMobile from '@/lib/utils/hooks/useIsMobile'
import styles from '@/styles/home.module.scss'
import Head from 'next/head'
import { ReactElement } from 'react'

const Home: React.FC = (): ReactElement => {
    const isMobile = useIsMobile()
    const width = 3840
    const height = 400
    const src = 'https://res.cloudinary.com/dqs1n4hjy/image/upload/v1676517667/cloud_rbdnco.png'

    const drawCanvas = (ctx: CanvasRenderingContext2D | null) => {
        const image = new Image()

        // Animation values
        const startX = 1250 // starting x coordinate
        const startY = -1100 // starting y coordinate
        const minX = -120 // minimum x coordinate
        const minY = -862 // minimum y coordinate to match nav border

        let x = startX
        let y = startY

        const drawScreen = () => {
            ctx?.save()
            ctx?.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height) // clear canvas
            ctx?.drawImage(image, x, y) // draw image at current position
            ctx?.restore()
            x -= 4

            // make sure we are still off screen and lower sprite to position
            if (y <= minY && x > minX) {
                y += 4
            }

            // check to see if we have reached end of nav border and raise sprite off screen
            if (x <= minX) {
                y -= 2

                // reset sprite position
                if (y <= startY + 50) {
                    x = startX
                    y = startY
                }
            }
        }
        if (x <= startX && y >= startY) requestAnimationFrame(drawScreen)
        image.src = src

        setInterval(drawScreen, 45)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Zach Donnelly</title>
            </Head>
            <section className={styles.inner}>
                {!isMobile && (
                    <div className={styles.canvas}>
                        <Canvas draw={drawCanvas} height={height} width={width} className={styles.canvas} />
                    </div>
                )}
                <div className={styles.imgContainer}>test</div>
            </section>
        </div>
    )
}

export default Home
