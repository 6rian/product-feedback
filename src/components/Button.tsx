import './button.scss'

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Naked = 'naked',
}

interface ButtonProps {
  style: ButtonStyle;
  text: string;
  onClick?: () => void;
}

export default function Button({
  style = ButtonStyle.Primary,
  text,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`button button--style-${style}`}
      {...props}
    >
      {text}
    </button>
  )
}
