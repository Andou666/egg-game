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
      <h1>受精卵を産む</h1>
        <p>あなたはいくつかの未受精卵を産みました。</p>
        <p>孵化することはないので、あまり愛着を持つことはありません。</p>
        <p>これが彼らです。🥚 🥚 🥚</p>
        <p>やばい、食べ物にされてしまう！？というのは冗談で、あなたは本当に気にしません。</p>
        <p>彼らはすべてファーマーズマーケットで安く売られています。</p>
      <Link href="/continue">
        <a>続ける</a>
      </Link>
      <Link href="/unfertilized-egg">
        <a>体を未受精卵に変更する</a>
      </Link>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}


export default LayUnfertilizedEgg;
