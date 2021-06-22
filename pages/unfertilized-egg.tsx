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
      <h1>未受精卵</h1>
        <p>あなたは未受精卵です。そうか...もうどうしようもないな。</p>
        <p>人間に巣から連れ出されたあなたは、市場でそれなりの値段で売られます。</p>
        <p>ダンボールで仕切られた箱の中で、あなたはしばらく待っています。あなたには、今すぐにでも友達になれるような友達が12人近くいるのです。</p>
        <p>あなたは一人の若い女性に買われました。</p>
        <p>これがあなたです。🥚</p>
        <p>今は選択肢があまりありません。あなたは、どこかの女性の冷蔵庫から取り出されるのを待っているただの卵です。</p>
        <p>あなたの運命は食べられることです。どのような食べ物にされたいですか？</p>
      <Link href="/fried-egg">
        <a>目玉焼き</a>
      </Link>
      <Link href="/oden">
        <a>おでん</a>
      </Link>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}


export default UnfertilizedEgg;
