import Canvas from '@/components/base/canvas'
import { canvasSpriteSrc, name, siteTitle } from '@/lib/info'
import CanvasAnimation from '@/lib/utils/animations/canvasAnimation'
import HomePageTextAnimations from '@/lib/utils/animations/HomePageTextAnimations'
import useIsMobile from '@/lib/utils/hooks/useIsMobile'
import styles from '@/styles/home.module.scss'
import Head from 'next/head'
import { ReactElement } from 'react'

const Home: React.FC = (): ReactElement => {
  const isMobile = useIsMobile()
  const textAnimations = new HomePageTextAnimations()

  const drawCanvas = (ctx: CanvasRenderingContext2D) => {
    const image = new Image()
    image.src = canvasSpriteSrc

    const animation: CanvasAnimation = new CanvasAnimation(ctx, image)

    image.onload = () => setInterval(() => animation.drawScreen(), 45)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${name} ${siteTitle}`}</title>
        <meta property="og:image" content={canvasSpriteSrc} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="608" />
        <meta property="og:image:secure_url" content={canvasSpriteSrc} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={canvasSpriteSrc} />
        <meta name="application-name" content="zachdonnelly.com" />
        <meta property="author" content={name} />
      </Head>
      <section className={styles.canvasContainer}>
        {!isMobile && (
          <div className={styles.canvas}>
            <Canvas draw={drawCanvas} height={200} width={1920} className={styles.canvas} />
          </div>
        )}
      </section>
      <section className={styles.hero}>
        <div className={styles.content}>
          <header>
            <h3>
              {/* <motion.span variants={textAnimations.container} initial="hidden" animate="show">
                                {textAnimations.mainHeading.map((char, i: number) => (
                                    <motion.span key={i} aria-hidden="true" variants={textAnimations.heading}>
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.span> */}
            </h3>
          </header>
        </div>
      </section>
    </div>
  )
}

export default Home
