if(process.client) {
	const cursorInner = document.getElementById("cursor-inner");
	const cursorOuter = document.getElementById("cursor-outer");

	function handleMouseEnter() {
		// @ts-ignore
		cursorInner.classList.remove("cursor--small")
		// @ts-ignore
		cursorOuter.classList.remove("cursor--outer")
		// @ts-ignore
		cursorOuter.classList.add("mouse-over");

	}

	function handleMouseLeave() {
		// @ts-ignore
		cursorInner.classList.add("cursor--small");
		// @ts-ignore
		cursorOuter.classList.add("cursor--outer");
		// @ts-ignore
		cursorOuter.classList.remove("mouse-over");
	}

	const linkItems = document.querySelectorAll("a");
	linkItems.forEach(link => {
		link.addEventListener("mouseenter", handleMouseEnter);
		link.addEventListener("mouseleave", handleMouseLeave);
	});
}
