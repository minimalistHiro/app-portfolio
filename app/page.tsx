import Image from "next/image";
import styles from "./page.module.css";

const appProjects = [
  {
    name: "YamaGo",
    iconLabel: "YG",
    appStoreLink: "https://apps.apple.com/jp/app/yamago-%E5%B1%B1%E6%89%8B%E7%B7%9A%E5%86%85%E9%AC%BC%E3%81%94%E3%81%A3%E3%81%93/id6754624431",
    playStoreLink: "#", // Replace with actual Google Play URL
  },
  {
    name: "Cafe Compass",
    iconLabel: "CC",
    appStoreLink: "#",
    playStoreLink: "#",
  },
  {
    name: "Community Pulse",
    iconLabel: "CP",
    appStoreLink: "#",
    playStoreLink: "#",
  },
];

const socialLinks = [
  {
    label: "Antenna Books & Cafe ココシバ Official Site",
    url: "https://cocoshiba.com",
    icon: "site",
  },
  {
    label: "X (Twitter) – Antenna Books & Cafe ココシバ",
    url: "https://x.com/cocoshiba5513",
    icon: "x",
  },
  {
    label: "Facebook – Antenna Books & Cafe ココシバ",
    url: "https://www.facebook.com/cocoshiba5513",
    icon: "facebook",
  },
  {
    label: "Instagram – Antenna Books & Cafe ココシバ",
    url: "https://www.instagram.com/cocoshiba5513",
    icon: "instagram",
  },
];

const introParagraphs = [
  "ミニマリスト志向のアプリ開発者兼コミュニティカフェ「ココシバ」運営。",
  "川口市芝銀座通り商店街公式ポイントアプリ SheeBa や、山手線リアル鬼ごっこゲーム YamaGo を開発し、シンプルで使いやすいプロダクト設計を重視しています。",
  "カフェ運営では、食品ロスゼロのメニューと地域コミュニティづくりに注力。",
  "「常識を超える仕組みをつくる」をテーマに、テクノロジーと場づくりを融合した活動を行っています。",
];

type SocialIconProps = {
  type: "site" | "x" | "facebook" | "instagram";
};

function SocialIcon({ type }: SocialIconProps) {
  if (type === "site") {
    return (
      <svg viewBox="0 0 24 24" className={styles.socialIcon} aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M12 3v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6.5 4c2.5 3 3.5 5.7 3.5 8s-1 5-3.5 8" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M17.5 4c-2.5 3-3.5 5.7-3.5 8s1 5 3.5 8" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M3.5 8h17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M3.5 16h17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4.5 12h15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "x") {
    return (
      <svg viewBox="0 0 24 24" className={styles.socialIcon} aria-hidden="true">
        <path d="M6 4l6.9 6.1L18 4m0 16l-6.9-6.1L6 20" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className={styles.socialIcon} aria-hidden="true">
        <path d="M14.5 3h2.4v3.8h-2.4a1.6 1.6 0 0 0-1.6 1.6v1.8h4.2L17 15h-3.1v6h-3.6v-6H7V9.2h3.4V5.6C10.4 2.4 11.9 1 15.8 1H14.5z" fill="currentColor" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className={styles.socialIcon} aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4" ry="4" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={styles.socialIcon} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" fill="none" />
      <polyline points="8 12 11 15 16 9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={`${styles.section} ${styles.header}`}>
          <p className={styles.siteTitle}>金子広樹プロフィール</p>
          <p className={styles.subtitle}>Minimalist apps & community-driven products</p>
        </header>

        <section className={`${styles.section} ${styles.profileSection}`}>
          <div className={styles.profileImageWrapper}>
            <Image
              src="/images/profile.jpg"
              alt="金子広樹"
              width={200}
              height={200}
              className={styles.profileImage}
            />
          </div>
          <p className={styles.profileName}>金子広樹</p>
          <p className={styles.profileRole}>Antenna Books & Cafe ココシバ 店主 × アプリ開発エンジニア</p>
        </section>

        <section className={`${styles.section} ${styles.introSection}`}>
          {introParagraphs.map((text) => (
            <p key={text} className={styles.introText}>
              {text}
            </p>
          ))}
        </section>

        <section className={`${styles.section} ${styles.appsSection}`}>
          <p className={styles.appsHeading}>Developed Apps</p>
          <div className={styles.appCards}>
            {appProjects.map((project) => (
              <article key={project.name} className={styles.appCard}>
                <div className={styles.appIcon}>{project.iconLabel}</div>
                <h3 className={styles.appName}>{project.name}</h3>
                <div className={styles.storeLinks}>
                  <a
                    className={styles.storeLink}
                    href={project.appStoreLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    App Store
                  </a>
                  <a
                    className={styles.storeLink}
                    href={project.playStoreLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Play
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.coffeeSection}`}>
          <div className={styles.coffeeImageWrapper}>
            <Image
              src="/images/cocoshiba.jpg"
              alt="Antenna Books & Cafe ココシバ 店舗"
              width={1200}
              height={900}
              className={styles.coffeeImage}
            />
          </div>
        </section>

        <section className={`${styles.section} ${styles.coffeeSection}`}>
          <p className={styles.coffeeHeader}>Antenna Books & Cafe ココシバ</p>
          <p className={styles.coffeeText}>
            人と人をつなげる町のブックカフェ。厳選したトランスビュー扱いの本を取り揃えています。
            ボードゲーム会、クッキング&パーティ、ハンドメイド・スローマーケット、ガレージセールなどイベントを複数開催しております。
          </p>
          <p className={styles.coffeeText}>
            モバイルファーストの思考を持ちながら、土台となるカフェの空間づくりも大切にしています。メニューやイベント情報はすべて自前のアプリで更新・通知し、開発者とお客様が一緒に成長するサイクルを描いています。
          </p>
        </section>

        <section className={`${styles.section} ${styles.contactSection}`}>
          <p className={styles.appsHeading}>Contact & Access</p>
          <div className={styles.contactContent}>
            <dl className={styles.contactList}>
              <div className={styles.contactItem}>
                <dt>メール</dt>
                <dd>
                  <a className={styles.contactLink} href="mailto:h.kaneko.baseball@icloud.com">
                    h.kaneko.baseball@icloud.com
                  </a>
                </dd>
              </div>
              <div className={styles.contactItem}>
                <dt>電話</dt>
                <dd>
                  <a className={styles.contactLink} href="tel:08060507194">
                    080-6050-7194
                  </a>
                </dd>
              </div>
              <div className={styles.contactItem}>
                <dt>住所</dt>
                <dd>
                  埼玉県川口市芝5-5-13{" "}
                  <a
                    className={styles.contactLink}
                    href="https://www.google.com/maps?q=埼玉県川口市芝5-5-13"
                    target="_blank"
                    rel="noreferrer"
                  >
                    （Googleマップ）
                  </a>
                </dd>
              </div>
              <div className={styles.contactItem}>
                <dt>営業時間</dt>
                <dd>11:00〜18:00（月・火定休）</dd>
              </div>
            </dl>
            <div className={styles.mapWrapper}>
              <iframe
                title="Antenna Books & Cafe ココシバ Google Map"
                src="https://www.google.com/maps?q=埼玉県川口市芝5-5-13&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className={styles.mapFrame}
              />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.socialSection}`}>
          <p className={styles.appsHeading}>Follow Antenna Books & Cafe ココシバ</p>
          <div className={styles.socialList}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className={styles.socialItem}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
              >
                <SocialIcon type={link.icon as SocialIconProps["type"]} />
              </a>
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          © 2025 金子広樹 ・ <a href="mailto:h.kaneko.baseball@icloud.com">h.kaneko.baseball@icloud.com</a>
        </footer>
      </div>
    </div>
  );
}
