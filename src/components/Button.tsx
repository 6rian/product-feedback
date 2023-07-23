import BackIcon from '../images/back.svg'
import styles from './button.module.scss'

interface ButtonProps {
  /**
   * Style variant
   */
  style?: 'primary' | 'secondary' | 'tertiary' | 'naked';
  /**
   * Button text content
   */
  text: string;
  /**
   * Is back button?
   */
  back?: boolean;
  /**
   * Click handler
   */
  onClick?: () => void;
}

export default function Button({
  style = 'primary',
  text,
  back = false,
  ...props
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[`button--style-${style}`]
  ]
  return (
    <button
      type="button"
      className={classes.join(' ')}
      {...props}
    >
      {back && <BackIcon />}
      {text}
    </button>
  )
}
