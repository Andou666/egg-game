import Head from 'next/head'

function CommonHead() {
  return <Head>
    <title>絵文字アドベンチャー</title>
    <meta name="description" content="絵文字の動物の命を奪うゲームブックです。" />
    <link rel="icon" href="/favicon.ico" />
  </Head>;
}

export default CommonHead;