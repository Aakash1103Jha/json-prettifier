import { ChangeEvent, useState, type FC } from "react"
import Button from "../../components/Button/Button"

import styles from "./FormatJson.module.css"
import { minifyJson, prettifyJson } from "../../utils/functionalities"

const FormatJson: FC = () => {
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
		const finalData = prettifyJson(rawData)
		setPrettyData(finalData)
	}
	const onClickMinifyData = () => {
		const finalData = minifyJson(rawData)
		setPrettyData(finalData)
	}

	return (
		<div className={`${styles.formatjson}`}>
			<textarea
				id="raw"
				value={rawData}
				onChange={onRawDataChange}
				placeholder="Ugly JSON 🤢 goes in here..."
				className={`${styles.textarea} ${styles.raw}`}></textarea>
			<div className={`${styles.actions}`}>
				<Button label="Prettify" handlerFunc={onClickPrettifyData} />
				<Button label="Minify" handlerFunc={onClickMinifyData} />
				<Button
					label="❌"
					btnStyle="secondary"
					handlerFunc={clearData}
					classname="danger"
				/>
			</div>
			<textarea
				readOnly
				onContextMenu={() => false}
				id="formatted"
				onChange={onPrettyDataChange}
				value={prettyData}
				placeholder="Pretty JSON 🚀 comes out here..."
				className={`${styles.textarea} ${styles.formatted}`}></textarea>
		</div>
	)
}

export default FormatJson
