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
	const onJsonFileUpload = async (data: FileList) => {
		if (!data) return alert("Add a JSON file to upload...")
		if (data[0].type !== "application/json") return alert("Only JSON files are allowed")
		const jsonFileData = data[0]
		const fd = new FormData()
		fd.append("json_file", jsonFileData)

		const res = await fetch("http://localhost:4000/api/file/upload", {
			method: "POST",
			body: fd,
		})
		const uploaded = await res.json()
		setRawData(uploaded)
	}

	return (
		<>
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
			<div className={`${styles.uploader}`}>
				<input
					type="file"
					id="json_file"
					onChange={(event) => onJsonFileUpload(event.target.files!)}
				/>
			</div>
		</>
	)
}

export default FormatJson
