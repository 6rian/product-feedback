import BackIcon from '../images/back.svg'
import './button.scss'

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
  return (
    <button
      type="button"
      className={`button button--style-${style}`}
      {...props}
    >
      {back && (
        <BackIcon />
      )}
      {text}
    </button>
  )
}
