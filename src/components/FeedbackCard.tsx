import Pill from './Pill'
import Upvote from './Upvote'
import CommentsCount from './CommentsCount'
import styles from './feedbackcard.module.scss'

interface FeedbackCardProps {
  /**
   * Short, descriptive headline
   */
  title: string;
  /**
   * Feedback category 
   */
  category: 'Feature' | 'UI' | 'UX' | 'Enhancement' | 'Bug';
  /**
   * Feedback details
   */
  details: string;
  /**
   * Number of upvotes
   */
  upvotesCount: number;
  /**
   * Number of comments
   */
  commentsCount: number;
  /**
   * Click handler
   */
  onClick?: () => void;
}

export default function FeedbackCard({
  title,
  category,
  details,
  upvotesCount = 0,
  commentsCount = 0,
  ...props
}: FeedbackCardProps) {
  return (
    <article className={styles['feedback-card']}>
      <div className={styles.main}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.details}>{details}</p>
        <Pill text={category} />
      </div>
      <div className={styles.upvotes}>
        <Upvote count={upvotesCount} />
      </div>
      <div className={styles.comments}>
        <CommentsCount count={commentsCount} />
      </div>
    </article>
  )
}
