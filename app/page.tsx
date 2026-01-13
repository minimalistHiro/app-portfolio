import Image from "next/image";
import styles from "./page.module.css";

type StoreButtonImage = {
  src: string;
  width: number;
  height: number;
};

type AppProject = {
  name: string;
  subtitle?: string;
  iconLabel?: string;
  iconImage?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  storeButtons?: {
    appStore?: StoreButtonImage;
    googlePlay?: StoreButtonImage;
  };
};

const appProjects: AppProject[] = [
  {
    name: "ココシバ公式アプリ",
    subtitle: "Antenna Books & Cafe ココシバのポイント、イベント確認・予約",
    iconImage: "/images/cocoshiba-app-icon.png",
    appStoreLink: "https://apps.apple.com/jp/app/%E3%82%B3%E3%82%B3%E3%82%B7%E3%83%90%E5%85%AC%E5%BC%8F%E3%82%A2%E3%83%97%E3%83%AA/id6756299363",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.groumap.cocoshiba",
    storeButtons: {
      appStore: {
        src: "/images/apple-download.jpeg",
        width: 119,
        height: 35,
      },
      googlePlay: {
        src: "/images/google-download.jpeg",
        width: 121,
        height: 36,
      },
    },
  },
  {
    name: "YamaGo〜山手線内鬼ごっこ〜",
    subtitle: "新感覚！山手線内リアル鬼ごっこ",
    iconImage: "/images/yamago-icon.png",
    appStoreLink: "https://apps.apple.com/jp/app/yamago-%E5%B1%B1%E6%89%8B%E7%B7%9A%E5%86%85%E9%AC%BC%E3%81%94%E3%81%A3%E3%81%93/id6754624431",
    playStoreLink: "https://play.google.com/store/apps/details?id=io.groumap.yamago",
    storeButtons: {
      appStore: {
        src: "/images/apple-download.jpeg",
        width: 119,
        height: 35,
      },
      googlePlay: {
        src: "/images/google-download.jpeg",
        width: 121,
        height: 36,
      },
    },
  },
  {
    name: "SheeBa",
    subtitle: "川口市芝銀座通り商店街の地域ポイントアプリ",
    iconImage: "/images/sheeba-icon.png",
    appStoreLink: "https://apps.apple.com/jp/app/sheeba-%E5%B7%9D%E5%8F%A3%E5%B8%82%E8%8A%9D%E9%8A%80%E5%BA%A7%E9%80%9A%E3%82%8A%E5%95%86%E5%BA%97%E8%A1%97%E3%81%AE%E5%9C%B0%E5%9F%9F%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%82%A2%E3%83%97%E3%83%AA/id6475390775",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.hiroki.sheeba&hl=ja",
    storeButtons: {
      appStore: {
        src: "/images/apple-download.jpeg",
        width: 119,
        height: 35,
      },
      googlePlay: {
        src: "/images/google-download.jpeg",
        width: 121,
        height: 36,
      },
    },
  },
  {
    name: "ひらがな・カタカナ練習 - Nocon",
    subtitle: "UDデジタル教科書体を使用したひらがな・カタカナ練習アプリ",
    iconImage: "/images/hiragana-icon.png",
    appStoreLink: "https://apps.apple.com/jp/app/%E3%81%B2%E3%82%89%E3%81%8C%E3%81%AA-%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A%E7%B7%B4%E7%BF%92-nocon/id6451435318",
    storeButtons: {
      appStore: {
        src: "/images/apple-download.jpeg",
        width: 119,
        height: 35,
      },
    },
  },
];

const socialLinks = [
  {
    label: "Antenna Books & Cafe ココシバ Official Site",
    url: "https://newcocoshiba.com",
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
      <Image
        src="/images/web.png"
        alt="公式サイト"
        width={32}
        height={32}
        className={styles.socialIconImage}
      />
    );
  }

  if (type === "x") {
    return (
      <Image
        src="/images/X.png"
        alt="X"
        width={32}
        height={32}
        className={styles.socialIconImage}
      />
    );
  }

  if (type === "facebook") {
    return (
      <Image
        src="/images/facebook.png"
        alt="Facebook"
        width={32}
        height={32}
        className={styles.socialIconImage}
      />
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
          <div className={styles.contactAddButtonWrapper}>
            <a
              className={styles.contactAddButton}
              href="/hiroki-kaneko-contact.vcf"
              aria-label="金子広樹を連絡先に追加"
            >
              連絡先に追加
            </a>
          </div>
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
                <div className={styles.appIcon}>
                  {project.iconImage ? (
                    <Image
                      src={project.iconImage}
                      alt={`${project.name} アイコン`}
                      width={48}
                      height={48}
                      className={styles.appIconImage}
                    />
                  ) : (
                    project.iconLabel
                  )}
                </div>
                <h3 className={styles.appName}>{project.name}</h3>
                {project.subtitle && (
                  <p className={styles.appSubtitle}>{project.subtitle}</p>
                )}
                <div
                  className={`${styles.storeLinks} ${
                    project.storeButtons ? styles.storeLinksImages : ""
                  }`}
                >
                  {project.storeButtons ? (
                    <>
                      {project.appStoreLink && project.storeButtons.appStore && (
                        <a
                          className={`${styles.storeLink} ${styles.storeLinkImage}`}
                          href={project.appStoreLink}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} をApp Storeからダウンロード`}
                        >
                          <Image
                            src={project.storeButtons.appStore.src}
                            alt="App Storeからダウンロード"
                            width={project.storeButtons.appStore.width}
                            height={project.storeButtons.appStore.height}
                            className={styles.storeButtonImage}
                          />
                        </a>
                      )}
                      {project.playStoreLink && project.storeButtons.googlePlay && (
                        <a
                          className={`${styles.storeLink} ${styles.storeLinkImage}`}
                          href={project.playStoreLink}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} をGoogle Playで入手`}
                        >
                          <Image
                            src={project.storeButtons.googlePlay.src}
                            alt="Google Playで手に入れよう"
                            width={project.storeButtons.googlePlay.width}
                            height={project.storeButtons.googlePlay.height}
                            className={styles.storeButtonImage}
                          />
                        </a>
                      )}
                    </>
                  ) : (
                    <>
                      {project.appStoreLink && (
                        <a
                          className={styles.storeLink}
                          href={project.appStoreLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          App Store
                        </a>
                      )}
                      {project.playStoreLink && (
                        <a
                          className={styles.storeLink}
                          href={project.playStoreLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Google Play
                        </a>
                      )}
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className={styles.moreAppsButtonWrapper}>
            <a
              className={styles.moreAppsButton}
              href="https://apps.apple.com/jp/developer/hiroki-kaneko/id1656579581"
              target="_blank"
              rel="noreferrer"
            >
              その他開発したアプリはこちら
            </a>
            <a
              className={styles.googleGroupButton}
              href="https://groups.google.com/g/hiro-apptest"
              target="_blank"
              rel="noreferrer"
            >
              Googleグループに参加
            </a>
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
          <div className={styles.legalLinks}>
            <a className={styles.legalLink} href="/terms">
              利用規約
            </a>
            <a className={styles.legalLink} href="/privacy">
              プライバシーポリシー
            </a>
          </div>
        </section>

        <footer className={styles.footer}>
          © 2025 金子広樹 ・ <a href="mailto:h.kaneko.baseball@icloud.com">h.kaneko.baseball@icloud.com</a>
        </footer>
      </div>
    </div>
  );
}
