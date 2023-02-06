import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            <Head>
                <title>Zachary Donnelly</title>
                <meta name="description" content="Zachary Donnelly Senior Software Engineer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Image src="/logo.png" height={100} width={110} alt="zach donnelly" />
            </div>
        </>
    )
}
