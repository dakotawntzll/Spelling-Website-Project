document.addEventListener("DOMContentLoaded", () => {
	const textStack = document.querySelector(".text-stack");
	const layer = textStack?.querySelector(".text-layer");
	if (!textStack || !layer) return;

	const updateLabel = () => {
		const text = (layer.textContent || "").trim();
		textStack.style.setProperty("--label", `"${text.toUpperCase()}"`);
	};

	updateLabel();

	layer.addEventListener("input", updateLabel);
});
