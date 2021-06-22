import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import CommonHead from './components/CommonHead'

function NoEgg() {
  return (
    <div className={styles.container}>
      <CommonHead />

      <main className={styles.main}>
      <h1>卵を産まない</h1>
        <p>卵を産んでいませんね。</p>
        <p>まあ、かなり退屈だったかな。何かエキサイティングなことはないのかな......。ああ、神様。</p>
        <p>あなたは屠殺され食料にされます。卵を産まないので役に立たないと思われたのです。</p>
        <p>チョップ</p>
        <p>その光景は、あなたにとって、本当に恐ろしいものです。まあ、彼らはあなたの頭を体から切り離したので、あなたには見えないと思いますが。</p>
        <p>彼らはあなたの身体を、複数の加工食品に変えます。</p>
        <p>これがあなたです。🐔 🍗 🍗 🍤 </p>
        <p>悲しい... 感謝祭でもないのに...</p>
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


export default NoEgg;
