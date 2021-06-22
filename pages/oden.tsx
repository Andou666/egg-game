import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import CommonHead from './components/CommonHead'

function Oden() {
  return (
    <div className={styles.container}>
      <CommonHead />

      <main className={styles.main}>
      <h1>おでん</h1>
        <p>あなたはおでんです。</p>
        <p>コンニチハ！あなたは日本の珍味です。あなたはとても賢明な道を選びました。</p>
        <p>確かにあなたは食べられてしまい、あなたの物語は終わろうとしていますが、少なくとも、あなたは買い手を満足させたことを知って死ぬことができます。</p>
        <p>これがあなたです。🍢</p>
        <p>かまぼこや大根など、たくさんの棒状の食材と一緒に、あなたは食べられてしまいます。そして、買い手は嬉しそうに笑います。</p>
        <p>GAME OVER... </p>
      <Link href="/">
        <a>リスタート</a>
      </Link>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}


export default Oden;
