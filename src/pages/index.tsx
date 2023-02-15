import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            <Head>
                <title>Zachary Donnelly</title>
                <meta name="description" content="Zachary Donnelly Senior Software Engineer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/icons/favicon.ico" />
            </Head>
            <Image src="/assets/images/banner.png" alt="Zachary Donnelly" height={720} width={1920} />
        </>
    )
}
