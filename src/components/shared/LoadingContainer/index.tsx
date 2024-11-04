import classes from "./loadingContainer.module.scss"

type LoadingContainerProps = {
   message: string
}

/**
 * A functional component that renders a loading container with a customizable message.
 * 
 * @param {LoadingContainerProps} props - The properties passed to the component.
 * @prop {string} message - The message to display within the loading container.
 * 
 * @returns {JSX.Element} A JSX element representing the loading container.
 */
const LoadingContainer = (props: LoadingContainerProps) => {
   const { message } = props

   return (
      <div className={classes.loadingContainer}>{message}</div>
   )
}

export default LoadingContainer