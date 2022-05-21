import { type FC } from "react"
import { GlobalProps } from "../../utils/GlobalProps"

import styles from "./Button.module.css"

interface ButtonProps extends GlobalProps {
	label: string
	btnStyle?: "primary" | "secondary"
}

const Button: FC<ButtonProps> = (props) => {
	const { btnStyle = "primary", label } = props
	return (
		<button className={`${styles.button} ${styles[btnStyle]}`} onClick={props.handlerFunc}>
			{label}
		</button>
	)
}

export default Button
