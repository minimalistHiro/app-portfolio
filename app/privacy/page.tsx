import styles from "../legal.module.css";

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>GrouMap プライバシーポリシー</h1>
          <p className={styles.meta}>制定日: 2025年3月1日</p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. 取得する情報</h2>
          <p className={styles.text}>
            当社は、GrouMapの提供にあたり、以下の情報を取得する場合があります。
          </p>
          <ul className={styles.list}>
            <li>登録情報（氏名またはニックネーム、メールアドレス等）</li>
            <li>プロフィール情報（アイコン、自己紹介等）</li>
            <li>位置情報（マップ機能や周辺店舗表示のため）</li>
            <li>利用履歴（ポイント付与・利用履歴、閲覧・検索履歴等）</li>
            <li>端末情報・ログ情報（IPアドレス、ブラウザ・OS、アクセス日時等）</li>
            <li>加盟店舗に関する契約・請求情報（店舗利用者向けプランの申込時）</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. 利用目的</h2>
          <ul className={styles.list}>
            <li>本サービスの提供、運営、保守、改善のため</li>
            <li>共通ポイントの付与・利用・精算のため</li>
            <li>加盟店舗および利用者への連絡、サポート対応のため</li>
            <li>不正利用の防止、セキュリティ確保のため</li>
            <li>新機能やキャンペーン等の案内のため</li>
            <li>統計情報の作成およびサービス改善のため（個人を特定しない形）</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. 第三者提供</h2>
          <p className={styles.text}>
            当社は、以下の場合を除き、個人情報を第三者に提供しません。
          </p>
          <ul className={styles.list}>
            <li>利用者の同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要な場合</li>
            <li>業務委託先に必要な範囲で提供する場合（第4項参照）</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. 委託</h2>
          <p className={styles.text}>
            当社は、サービス運営に必要な範囲で、個人情報の取り扱いを外部事業者に委託することがあります。
            この場合、適切な委託先の選定および管理を行います。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. 安全管理</h2>
          <p className={styles.text}>
            当社は、個人情報の漏えい、滅失、毀損の防止その他の安全管理のために必要かつ適切な措置を講じます。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. 保有期間</h2>
          <p className={styles.text}>
            当社は、利用目的に必要な期間に限り個人情報を保有し、不要となった情報は適切な方法で削除または匿名化します。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. 開示・訂正・削除等</h2>
          <p className={styles.text}>
            利用者は、当社所定の方法により、自己の個人情報の開示、訂正、追加、削除、利用停止を求めることができます。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. クッキー等の利用</h2>
          <p className={styles.text}>
            当社は、利便性向上や利用状況分析のためにクッキーや類似技術を使用する場合があります。
            ブラウザ設定によりクッキーの受け取りを拒否できますが、一部機能が利用できない場合があります。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>9. ポリシーの改定</h2>
          <p className={styles.text}>
            当社は、法令の改正やサービス内容の変更等に応じて本ポリシーを改定することがあります。
            重要な変更の場合、当社は合理的な方法で告知します。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>10. お問い合わせ</h2>
          <p className={styles.text}>
            本ポリシーに関するお問い合わせは、アプリ内のお問い合わせ窓口または当社が指定する方法にてご連絡ください。
          </p>
        </section>

        <a className={styles.backLink} href="/">
          ← トップへ戻る
        </a>
      </div>
    </main>
  );
}
