import Button from './Button'
import BulbIcon from '../images/icons/icon-bulb.svg'
import styles from './suggestionsbar.module.scss'

export default function SuggestionsBar() {
  const suggestionsCount = 6

  return (
    <div className={styles.suggestionsBar}>
      <div className={styles.count}>
        <BulbIcon />
        {suggestionsCount} Suggestions
      </div>
      <div>
        [sort by]
      </div>
      <Button text="+ Add Feedback" />
    </div>
  )
}
