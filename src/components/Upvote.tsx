import UpIcon from '../images/icons/icon-arrow-up.svg'
import styles from './upvote.module.scss'

interface UpvoteProps {
  /**
   * Count
   */
  count: number;
  /**
   * Is active?
   */
  active?: boolean;
  /**
   * Click handler
   */
  onClick?: () => void;
}

export default function Upvote({
  count,
  active = false,
  ...props
}: UpvoteProps) {
  const classes = [
    styles.upvote,
    active ? styles['upvote--active'] : '',
  ]
  return (
    <div className={classes.join(' ')}>
      <UpIcon />
      {count}
    </div>
  )
}
