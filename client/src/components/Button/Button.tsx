import { type FC } from "react"
import styles from "./Button.module.css"

interface ButtonProps {
	label: string

	onclick: () => void | {}
}

const Button: FC<ButtonProps> = (props) => {
	return <button className={`${styles.button}`}>{props.label}</button>
}

export default Button
