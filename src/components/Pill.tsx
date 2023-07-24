import styles from './pill.module.scss'

interface PillProps {
  /**
   * Text content
   */
  text: string;
  /**
   * Is active?
   */
  active?: boolean;
  /**
   * Click handler
   */
  onClick?: () => void;
}

export default function Pill({
  text,
  active = false,
  ...props
}: PillProps) {
  const classes = [
    styles.pill,
    active ? styles['pill--active'] : '',
  ]
  return (
    <div className={classes.join(' ')}>
      {text}
    </div>
  )
}
