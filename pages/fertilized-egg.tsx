import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import CommonHead from './components/CommonHead'

function UnfertilizedEgg() {
  return (
    <div className={styles.container}>
      <CommonHead />
     
      <main className={styles.main}>
      <h1>受精卵</h1>
        <p>あなたは受精卵です。</p>
        <p>これがあなたです。🥚</p>
        <p>孵化するのに十分な成長をするまでしばらく待ちます。</p>
      <Link href="/hatch">
        <a>孵化</a>
      </Link>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}


export default UnfertilizedEgg;
