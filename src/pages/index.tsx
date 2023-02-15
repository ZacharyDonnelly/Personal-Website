import Head from 'next/head'
import Image from 'next/image'
import { FC, ReactElement } from 'react'

const Home: FC = (): ReactElement => (
    <>
        <Head>
            <title>Zach Donnelly</title>
        </Head>
        <Image src="/assets/images/banner.png" alt="Zachary Donnelly" height={720} width={1920} priority />
    </>
)

export default Home
