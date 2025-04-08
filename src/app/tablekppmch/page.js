import styles from "./page.module.css";
import Image from 'next/image'

export default function tablekppmch() {
  return (
    <div className={styles.tablekppmch}>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <h1 className={styles.aboutTitle}>ตารางออกตรวจ</h1>
      <p className={styles.aboutText}>
        โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร
      </p>
      <p className={styles.aboutText}>เบอร์โทรติดต่อสอบถาม 055-716715</p>

      <table className={styles.table}>
        
        <thead>
          <tr className={styles.tableTitle}>
            <th>วัน</th>
            <th>08.30 น.- 12.00 น.</th>
            <th>13.00 น.- 16.30 น.</th>

          </tr>
        </thead>
        <tbody>
          <tr className={styles.monday}>
            <td>จันทร์</td>
            <td>ตรวจรักษาโรคทั่วไป คลินิกความดันโลหิตสูง-เบาหวาน<br></br>
              นพ.กำชัย รังสิมันต์ไพบูลย์ / พญ.จริดา สันธิติวงษ์
            </td>
            <td>ติดตามเยี่ยมบ้านผู้ป่วยในชุมชน<br></br>
              ทีมสหวิชาชีพ
            </td>

          </tr>
          <tr className={styles.tuesday}>
            <td rowSpan={2} className={styles.tuesday}>อังคาร</td>
            <td className={styles.tuesday}>ตรวจรักษาโรคทั่วไป คลินิกความดันโลหิตสูง-เบาหวาน<br></br>
              นพ.กำชัย รังสิมันต์ไพบูลย์ / พญ.จริดา สันธิติวงษ์
            </td>
            <td className={styles.tuesday}>ติดตามเยี่ยมบ้านผู้ป่วยในชุมชน<br></br>
              ทีมสหวิชาชีพ
            </td>

          </tr>
          <tr className={styles.tuesday}>
            <td>คลินิกวางแผนครอบครัว</td>
            <td>คลินิกผู้สูงอายุ</td>


          </tr>
          <tr className={styles.wednesday}>
            <td className={styles.wednesday}>พุธ</td>
            <td className={styles.wednesday}>ตรวจรักษาโรคทั่วไป และคลินิกความดันโลหิตสูง-เบาหวาน<br></br>
              นพ.กำชัย รังสิมันต์ไพบูลย์ / พญ.จริดา สันธิติวงษ์
            </td>
            <td className={styles.wednesday}>ติดตามเยี่ยมบ้านผู้ป่วยในชุมชน<br></br>
              ทีมสหวิชาชีพ
            </td>

          </tr>
          <tr className={styles.thursday}>
            <td rowSpan={2}>พฤหัสบดี</td>
            <td rowSpan={2}>ตรวจรักษาโรคทั่วไป และคลินิกความดันโลหิตสูง-เบาหวาน<br></br>
              นพ.กำชัย รังสิมันต์ไพบูลย์ / พญ.จริดา สันธิติวงษ์
            </td>
            <td>ติดตามเยี่ยมบ้านผู้ป่วยในชุมชน<br></br>
              ทีมสหวิชาชีพ
            </td>

          </tr>
          <tr>
            <td className={styles.thursday}>คลินิกให้คำปรึกษา</td>


          </tr>
          <tr className={styles.friday}>
            <td rowSpan={2}>ศุกร์</td>
            <td>ตรวจรักษาโรคทั่วไป และคลินิกความดันโลหิตสูง-เบาหวาน<br></br>
              นพ.กำชัย รังสิมันต์ไพบูลย์ / พญ.จริดา สันธิติวงษ์
            </td>
            <td>ติดตามเยี่ยมบ้านผู้ป่วยในชุมชน<br>
            </br>
              ทีมสหวิชาชีพ

            </td>
          </tr>
          <tr className={styles.friday}>
            <td className={styles.friday}>คลินิกฝากครรภ์</td>
            <td className={styles.friday}>คลินิกมะเร็งปากมดลูกและมะเร็งเต้านม</td>

          </tr>
        </tbody>
      </table>
      <p className={styles.titelqrcode}>โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชรเปิดให้บริการพิเศษ</p>
      <ul role="list" className={styles.listul}>
  <li>ตรวจคลื่นหัวใจ อัลตร้าซาวด์ และจี้หูด ในวันราชการ เวลา 08.30 – 11.30 น.</li>
  <li>บริการฝังและถอดยาคุมกำเนิด ในกลุ่มหญิงวัยเจริญพันธุ์ ในวันราชการ เวลา 08.30 – 11.30 น.</li>
  <li>คลินิกสุขภาพเด็กดี ให้บริการวันพฤหัสบดีสัปดาห์ที่ 2 และ 4 ของเดือน ในวันราชการ เวลา 13.00 – 16.00 น.</li>
  <li>คลินิกวัคซีนผู้ใหญ่ ให้บริการวันพฤหัสบดีสัปดาห์ที่ 3 ของเดือน (ในวันราชการ) เวลา 13.00 – 16.00 น.</li>
  <li>บริการสาธารณสุขระบบการแพทย์ทางไกล (Telemedicine) ในวันราชการ เวลา 10.00 – 11.30 น. </li>
</ul>
<p className={styles.titelqrcode}>โดยสแกน QR code นี้ เพื่อลงทะเบียนออนไลน์ผ่านแอปพลิเคชั่น Line OA ของโรงพยาบาล<br></br>ชุมชนเทศบาลเมืองกำแพงเพชร ขอรับบริการระบบการแพทย์ทางไกล (Telemedicine) </p>
<Image
      src="/img/Screenshot 2025-04-04 140122.png"
      width={150}
      height={150}
      alt="qrcode"
    />
    </div>
  );
}
