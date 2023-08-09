import Banner from '@/components/Banner'
import Pill from '@/components/Pill'
import SuggestionsBar from '@/components/SuggestionsBar'
import styles from './HomePage.module.scss'

export default function HomePage() {

  const categories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']
  const categoryPills = categories.map((c, idx) => <Pill text={c} active={idx < 1 ? true : false} />)

  return (
    <main className={styles.main}>
      <header className={styles.header} data-menu="closed">
        <Banner />
        <aside className={styles.menu}>
          <div className={styles['menu-inner']}>
            <div className={styles.categories}>{categoryPills}</div>
            {/* <div>roadmap</div> */}
          </div>
        </aside>
      </header>
      <div>
        <SuggestionsBar />
        <div className={styles['suggestions-list']}>
          insert SuggestionsList component here
        </div>
      </div>
    </main>
  )
}
