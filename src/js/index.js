import { allowedCharacters } from "./allowedCharacters.js"	

const textStackElement = document.querySelector(".text-stack")
const textLayerElement = document.querySelector(".text-layer")
const textInputElement = document.querySelector("#effect-input")
const editableStackElement = document.querySelector("#effect-input")

let firstInput = true

function updateLabel() {
	let rawText = textInputElement.value
	rawText = limitLines(rawText)
	const textValue = sanitizeText(rawText)
	textInputElement.value = textValue

	let displayText = textValue
	if (displayText.endsWith("\n")) {
		displayText += "\u00A0"
	}
	
	const cssLabel = displayText.toUpperCase().replace(/\n/g, "\\A ")
	textStackElement.style.setProperty("--label", `"${cssLabel}"`)
	textLayerElement.textContent = displayText
}


function sanitizeText(inputText) {
	
	let filteredText = ""
	
	for (const char of inputText) {
		if (char === "\n" || allowedCharacters.includes(char)) {
			filteredText += char
		}
	}

	if (filteredText === "") {
		return filteredText = " "
	}

	if (filteredText.length > 1 && filteredText[0] === " ") {
		return filteredText = filteredText.slice(1)
	}

	return filteredText
}

function limitLines(inputText) {
	const lines = inputText.split("\n")	
	return lines.slice(0, 3).join("\n")
}

document.addEventListener("DOMContentLoaded", function() {
	updateLabel();
})

textInputElement.addEventListener("input", updateLabel)

editableStackElement.addEventListener("mousedown", function (event) {
	if (textInputElement.value === " ") {
		event.preventDefault()
		textInputElement.focus()
		textInputElement.setSelectionRange(1, 1)
	}
	if (firstInput) {
		event.preventDefault()
		textInputElement.focus()
		textInputElement.setSelectionRange(1, 1)
		textInputElement.value = ""
		firstInput = false
		updateLabel()
	}
})



