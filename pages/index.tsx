import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import CommonHead from './components/CommonHead'

function Home() {
  return (
    <div className={styles.container}>
      <CommonHead />
      

      <main className={styles.main}>
      <h1>チキン</h1>
        <p>あなたはニワトリの道を選びました。</p>
        <p>あなたは卵です。</p>
        <p>これがあなたです。🥚</p>
        <p>あなたは受精卵ですか？</p>
      <Link href="/fertilized-egg">
        <a>はい</a>
      </Link>
      <Link href="/unfertilized-egg">
        <a>いいえ</a>
      </Link>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}


export default Home;
