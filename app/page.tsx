import Image from "next/image";
import styles from "./page.module.css";

const appProjects = [
  {
    name: "Minimal Notes",
    iconLabel: "MN",
    appStoreLink: "#", // Replace with actual App Store URL
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
    url: "#", // Replace with Antenna Books & Cafe ココシバ website URL
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
  "App Developer at heart, running a community café and building simple digital products for mindful living.",
  "I craft iOS/Android utilities with clean UX, then pair them with in-person moments at Antenna Books & Cafe ココシバ—a café that hosts workshops, music, and art.",
  "Minimalist visuals, generous whitespace, and thoughtful typography are the baseline for every release.",
];

type SocialIconProps = {
  type: "site" | "x" | "facebook" | "instagram";
};

function SocialIcon({ type }: SocialIconProps) {
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
          <p className={styles.coffeeHeader}>Antenna Books & Cafe ココシバ – Community Café</p>
          <p className={styles.coffeeText}>
            人と人をつなげる町のブックカフェ。厳選したトランスビュー扱いの本を取り揃えています。
            ボードゲーム会、クッキング&パーティ、ハンドメイド・スローマーケット、ガレージセールなどイベントを複数開催しております。
          </p>
          <p className={styles.coffeeText}>
            モバイルファーストの思考を持ちながら、土台となるカフェの空間づくりも大切にしています。メニューやイベント情報はすべて自前のアプリで更新・通知し、開発者とお客様が一緒に成長するサイクルを描いています。
          </p>
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
          © 2025 金子広樹 ・ <a href="mailto:hiro.kaneko@example.com">hiro.kaneko@example.com</a>
        </footer>
      </div>
    </div>
  );
}
