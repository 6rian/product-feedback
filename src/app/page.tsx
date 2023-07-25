import styles from './HomePage.module.scss'

export default function HomePage() {
  return (
    <main>
      <header className={styles.header} data-menu="open">
        <div className={styles.banner}>
          <div>
            <h1>Frontend Mentor</h1>
            <p>Feedback Board</p>
          </div>
          <span>menu</span>
        </div>
        <aside className={styles.menu}>
          <div className={styles['menu-inner']}>
            <div>categories</div>
            <div>roadmap</div>
          </div>
        </aside>
      </header>
      <div className={styles['suggestions-bar']}>
        insert SuggestionsBar component here
      </div>
      <div className={styles['suggestions-list']}>
        insert SuggestionsList component here
      </div>
    </main>
  )
}
