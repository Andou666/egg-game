import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import CommonHead from './components/CommonHead'

function FriedEgg() {
  return (
    <div className={styles.container}>
      <CommonHead />
      
      <main className={styles.main}>
      <h1>目玉焼き</h1>
        <p>あなたは目玉焼きです。</p>
        <p>何日も何日も冷蔵庫のドアが開いたり閉じたりした後、ついにあなたは選ばれました。</p>
        <p>名前も知らない女性があなたを割って、ジュージューと音を立てているフライパンの上にあなたの中身を置く。</p>
        <p>何の変哲もない、ただの朝食だ。</p>
        <p>これがあなたです。🍳</p>
        <p>人間は躊躇することなくあなたを食べます。確かに君は美味しかったけど、彼女は毎朝これを食べているんだ。</p>
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


export default FriedEgg;
