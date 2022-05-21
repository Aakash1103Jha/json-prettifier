/**
 * Formats the given data string to a string version of JSON,
 * rather than an object (tree-like structure)
 * @method prettifyJson
 * @param { string } data - JSON string to be formatted
 * @param { number } tabValue - Amount of spacing to be followed while formatting. If no value is provided, it defaults to 4
 * @returns {string} prettyJson - Minified JSON / error text is empty data string is provided
 */
export const prettifyJson = (data: string = "", tabValue = 4): string => {
	if (!data || !data.length) return "Provide JSON to be formatted"
	try {
		const prettyJson = JSON.stringify(JSON.parse(data), null, tabValue)
		return prettyJson
	} catch (err) {
		return (err as Error).message
	}
}

/**
 * Formats the given data string to a string version of JSON,
 * rather than an object (tree-like structure)
 * @method minifyJson
 * @param { string } data - JSON string to be formatted
 * @returns {string} prettyJson - Minified JSON / error text is empty data string is provided
 */
export const minifyJson = (data: string = "") => {
	if (!data || !data.length) return "Provide JSON to be formatted"
	try {
		const miniJson = JSON.stringify(JSON.parse(data))
		return miniJson
	} catch (err) {
		return (err as Error).message
	}
}
