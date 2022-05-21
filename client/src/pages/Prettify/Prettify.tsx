import { ChangeEvent, useState, type FC } from "react"
import Button from "../../components/Button/Button"

import styles from "./Prettify.module.css"
import { minifyJson, prettifyJson } from "../../utils/functionalities"

const Prettify: FC = () => {
	const [rawData, setRawData] = useState("")
	const [prettyData, setPrettyData] = useState("")

	const clearData = () => {
		setRawData("")
		setPrettyData("")
	}
	const onRawDataChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setRawData(e.target.value)
	}
	const onPrettyDataChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setPrettyData(e.target.value)
	}
	const onClickPrettifyData = () => {
		const finalData = minifyJson(rawData)
		setPrettyData(finalData)
	}

	return (
		<div className={`${styles.prettify}`}>
			<textarea
				id="raw"
				value={rawData}
				onChange={onRawDataChange}
				className={`${styles.textarea} ${styles.raw}`}></textarea>
			<div className={`${styles.actions}`}>
				<button onClick={onClickPrettifyData}>Prettify</button>
				<button onClick={clearData}>Reset</button>
			</div>
			<textarea
				readOnly
				onContextMenu={() => false}
				id="formatted"
				onChange={onPrettyDataChange}
				value={prettyData}
				className={`${styles.textarea} ${styles.formatted}`}></textarea>
		</div>
	)
}

export default Prettify
