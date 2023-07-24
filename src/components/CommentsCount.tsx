import BubbleIcon from '../images/icons/icon-comments.svg'
import styles from './commentscount.module.scss'

interface CommentsCountProps {
  /**
   * Number of comments
   */
  count: number;
}

export default function CommentsCount({
  count,
  ...props
}: CommentsCountProps) {
  return (
    <div className={styles['comments-count']}>
      <BubbleIcon />
      {count}
    </div>
  )
}
