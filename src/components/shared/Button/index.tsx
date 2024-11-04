import classes from './button.module.scss'

type ButtonProps = {
   label: string
   onClick?: () => void
   icon?: React.ReactNode
   variant?: 'primary' | 'secondary' | 'danger'
   disabled?: boolean
   type?: 'button' | 'submit'
}

/**
 * A functional component that renders a button.
 * 
 * @param {ButtonProps} props - The properties passed to the component.
 * @prop {string} label - The text to display on the button.
 * @prop {() => void} onClick - The function to call when the button is clicked.
 * @prop {React.ReactNode} [icon] - An optional icon to render before the label.
 * @prop {'primary'|'secondary'|'danger'} [variant='primary'] - The variant of the button.
 * @prop {boolean} [disabled=false] - Whether the button should be disabled.
 * 
 * @returns {JSX.Element} A JSX element representing the button.
 */
const Button = (props: ButtonProps) => {
   const { 
      label,
      onClick,
      icon,
      variant = 'primary',
      disabled = false,
      type
   } = props

   return (
      <button
         onClick={onClick}
         disabled={disabled}
         type={type || 'button'}
         className={`${classes.buttonWrapper} ${variant === 'primary' ? classes['buttonWrapper--primary'] : ''}`}
      >
         {icon && <span>{icon}</span>}
         {label}
      </button>
   )
}

export default Button