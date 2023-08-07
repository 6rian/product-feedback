import Banner from '@/components/Banner'
import SuggestionsBar from '@/components/SuggestionsBar'
import styles from './HomePage.module.scss'

export default function HomePage() {
  return (
    <main className={styles.main}>
      <header className={styles.header} data-menu="closed">
        <Banner />
        <aside className={styles.menu}>
          <div className={styles['menu-inner']}>
            <div>categories</div>
            <div>roadmap</div>
          </div>
        </aside>
      </header>
      <div>
        {/* <div className={styles['suggestions-bar']}> */}
        {/*   insert SuggestionsBar component here */}
        {/* </div> */}
        <SuggestionsBar />
        <div className={styles['suggestions-list']}>
          insert SuggestionsList component here
        </div>
      </div>
    </main>
  )
}
