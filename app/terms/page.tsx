import styles from "../legal.module.css";

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>GrouMap 利用規約</h1>
          <p className={styles.meta}>制定日: 2025年3月1日</p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第1条（適用）</h2>
          <p className={styles.text}>
            本規約は、GrouMap（以下「本サービス」）の提供条件および本サービスの利用に関する
            当社（本サービス運営者）と利用者との間の権利義務関係を定めるものです。
            利用者は本規約に同意の上、本サービスを利用するものとします。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第2条（定義）</h2>
          <ul className={styles.list}>
            <li>「利用者」とは、本サービスを利用するすべての方をいいます。</li>
            <li>「店舗利用者」とは、来店客としてポイントやマップ機能を利用する方をいいます。</li>
            <li>「加盟店舗」とは、当社と契約し本サービスに掲載・参加する飲食店等をいいます。</li>
            <li>「ポイント」とは、加盟店舗での来店・購入等により付与され、本サービス内で利用できるポイントをいいます。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第3条（サービス内容）</h2>
          <p className={styles.text}>
            本サービスは、共通ポイント、マップ、店舗発見（SNS的要素）を統合した飲食店向けサービスです。
            利用者は、新しい店舗の発見やポイント利用を通じて、地域内の店舗回遊を促進できます。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第4条（アカウント登録）</h2>
          <p className={styles.text}>
            本サービスの利用にあたり、当社が指定する情報の登録が必要となる場合があります。
            登録情報は正確かつ最新の状態で維持してください。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第5条（ポイントの取扱い）</h2>
          <ul className={styles.list}>
            <li>ポイントの付与・利用条件は、本サービスおよび加盟店舗が定めるルールに従います。</li>
            <li>1会計あたりのポイント利用上限等の共通ルールを設定する場合があります。</li>
            <li>ポイントは現金への換金、第三者への譲渡・担保設定を行うことはできません。</li>
            <li>ポイントの清算は加盟店舗間で行われ、利用者の権利義務に影響しません。</li>
            <li>不正利用が疑われる場合、当社はポイントの無効化等の措置を行うことがあります。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第6条（料金および支払い）</h2>
          <p className={styles.text}>
            店舗利用者の基本機能の利用は無料です。加盟店舗向けには月額課金プラン（ベーシック／プレミアム等）を提供し、
            10店舗まで無料、11店舗目以降は有料となる場合があります。詳細は別途当社が提示する条件に従います。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第7条（禁止事項）</h2>
          <ul className={styles.list}>
            <li>法令または公序良俗に違反する行為</li>
            <li>虚偽情報の登録、なりすまし、第三者の権利侵害</li>
            <li>ポイントの不正取得・不正利用</li>
            <li>本サービスの運営を妨害する行為</li>
            <li>当社が不適切と判断する行為</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第8条（知的財産権）</h2>
          <p className={styles.text}>
            本サービスに関する一切の知的財産権は当社または正当な権利者に帰属します。
            利用者は、当社の許諾なくこれらを利用することはできません。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第9条（サービスの変更・停止）</h2>
          <p className={styles.text}>
            当社は、必要に応じて本サービスの内容変更、提供の中断または終了を行うことがあります。
            これにより利用者に損害が生じた場合でも、当社は責任を負いません。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第10条（利用停止・退会）</h2>
          <p className={styles.text}>
            利用者が本規約に違反した場合、当社は事前通知なく利用停止またはアカウント削除を行うことがあります。
            退会に伴い、ポイントその他の権利は消滅する場合があります。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第11条（免責）</h2>
          <p className={styles.text}>
            当社は、本サービスに事実上または法律上の瑕疵がないことを保証しません。
            利用者が被った損害について、当社は当社の故意または重過失による場合を除き責任を負いません。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第12条（規約の変更）</h2>
          <p className={styles.text}>
            当社は、必要に応じて本規約を変更できます。重要な変更の場合、当社は合理的な方法で告知します。
            変更後に利用者が本サービスを利用した場合、変更後の規約に同意したものとみなします。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第13条（準拠法・管轄）</h2>
          <p className={styles.text}>
            本規約は日本法に準拠し、本サービスに関して紛争が生じた場合、当社の所在地を管轄する裁判所を専属的合意管轄とします。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第14条（お問い合わせ）</h2>
          <p className={styles.text}>
            本サービスに関するお問い合わせは、アプリ内のお問い合わせ窓口または当社が指定する方法にてご連絡ください。
          </p>
        </section>

        <a className={styles.backLink} href="/">
          ← トップへ戻る
        </a>
      </div>
    </main>
  );
}
