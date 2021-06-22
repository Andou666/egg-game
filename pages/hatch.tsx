import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import CommonHead from './components/CommonHead'

function Hatch() {
  return (
    <div className={styles.container}>
      <CommonHead />

      <main className={styles.main}>
      <h1>孵化</h1>
        <p>あなたはもうすぐ孵化します。</p>
        <p>あなたは準備ができています。あなたは、卵から出てきて、割れ始めます。</p>
        <p>これがあなたです。🐣</p>
        <p>あなたは初めて新鮮な空気を深呼吸します。</p>
        <p>殻から飛び出す前に周りを見渡すと、干し草の上で母親と思われる鶏が沈黙しているのが見えます。あなたはまだ小さな小さな赤ちゃんなので、何も考えませんでした。殻を破って飛び出したのです。</p>
        <p>無事に孵化したあなたは、養鶏場で自由に歩き回っています。</p>
        <p>これがあなたです。🐥</p>
        <p>あなたはかなりの時間、おそらく何週間も待ちました。あなたは大人の鶏に成長しました。</p>
        <p>これがあなたです。🐓</p>
        <p>あなたには3つの選択肢があります...賢く選んでください。</p>
        
      <Link href="/no-egg">
        <a>卵を産まない</a>
      </Link>
      <Link href="/lay-unfertilized-egg">
        <a>未受精卵を産む</a>
      </Link>
      <Link href="/lay-fertilized-egg">
        <a>受精卵を産む</a>
      </Link>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}


export default Hatch;
