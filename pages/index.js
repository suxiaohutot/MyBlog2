import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>大猫的友人帐</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="欢迎来到我的世界!" />
        <p className="description">
          想吃点啥就吃点啥
        </p>
      </main>

      <Footer />
    </div>
  )
}
