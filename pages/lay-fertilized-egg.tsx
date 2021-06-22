import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import CommonHead from './components/CommonHead'

function LayFertilizedEgg() {
  return (
    <div className={styles.container}>
      <CommonHead />
      
      <main className={styles.main}>
      <h1>受精卵を産む</h1>
        <p>あなたは受精卵を産みました。</p>
        <p>おめでとうございます、あなたは生きている赤ちゃんを産みました。</p>
        <p>この子は、🥚です。</p>
        <p>今はまだ目立った可愛さはありませんが、きっと愛らしいヒヨコに育つことでしょう。</p>
        <p>あなたは今までの体を捨てて、この卵として生き続けなければなりません。</p>
      <Link href="/fertilized-egg">
        <a>体を受精卵に変更する</a>
      </Link>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}


export default LayFertilizedEgg;
