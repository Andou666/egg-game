import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import CommonHead from './components/CommonHead'

function LayUnfertilizedEgg() {
  return (
    <div className={styles.container}>
      <CommonHead />

      <main className={styles.main}>
      <h1>グッドエンディング</h1>
        <p>これがあなたです。🐓</p>
        <p>あなたは長い間、農場のトップチキンであり続け、多くの未受精卵を産みました。</p>
        <p>あなたは農場の最大の成果でしたが、同時に破滅の原因にもなりました。彼らは無精卵に集中するあまり、より多くのヒナを生産することを忘れてしまったのです。</p>
        <p>会社は閉鎖を余儀なくされ、すべての家畜を殺してしまいます。しかし、あなたは彼らにとても良くしてくれたので、彼らはあなたを生かし、人生で素晴らしいことをしてくれることを期待して、一人で荒野をさまよっていました。</p>
        <p>その代わり、あなたは野生のコヨーテに食べられてしまいます。あなたは農家によく仕えていました。あなたは満足のいく鶏でしたが、すべての鶏や雄鶏はいつかは死ぬものなのです。そのために飼育されているのだから。</p>
        <p>GAME OVER...</p>
      <Link href="/">
        <a>リスタート</a>
      </Link>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default LayUnfertilizedEgg;
