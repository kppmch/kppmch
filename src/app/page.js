import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>KPPMCH</h1>
      <h1>ตารางออกตรวจ</h1>
      
        <Image
              src="/img/301954297_557215176200540_7668096401167096696_n.jpg"
              width={150}
              height={150}
              alt="qrcode"
              
            />
            <div className={styles.flexContainer}>
              <div className={styles.card}> {/* Card 1 */}
                <Link href="/tablekppmch" className={styles.cardLink}>
                  <h2 className={styles.cardTitle}>ตารางออกตรวจ</h2>
                  <p className={styles.cardDescription}>โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร</p>
                </Link>
              </div>
              <div className={styles.card}> {/* Card 2 */}
                <Link href="/table2" className={styles.cardLink}>
                  <h2 className={styles.cardTitle}>ตารางการให้บริการแพทย์แผนไทย</h2>
                  <p className={styles.cardDescription}>ศูนย์บริการแพทย์แผนไทย</p>
                </Link>
              </div>
              <div className={styles.card}> {/* Card 3 */}
                <Link href="/table3" className={styles.cardLink}>
                  <h2 className={styles.cardTitle}>ตารางการให้บริการแพทย์แผนไทย</h2>
                  <p className={styles.cardDescription}>ศูนย์พัฒนาคุณภาพชีวิตและส่งเสริมอาชีพผู้สูงอายุ</p>
                </Link>
              </div>
            </div>
    </main>
  );
}
