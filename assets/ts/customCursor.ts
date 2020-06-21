import gsap from 'gsap';

if(process.client) {
	let clientX: number = -100;
	let clientY: number = -100;
	const innerCursor = document.querySelector(".cursor--small");
	const outerCursor = document.querySelector(".cursor--outer");

	const initCursor = () => {
		document.addEventListener("mousemove", e => {
			clientX = e.clientX;
			clientY = e.clientY;
		});

		const render = () => {
			// @ts-ignore
			innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
			// @ts-ignore
			outerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;

			gsap.set(innerCursor, {
			  x: clientX,
			  y: clientY
			});

			gsap.set(outerCursor, {
				x: clientX - 7,
				y: clientY - 7
			});

			requestAnimationFrame(render);
		};
		requestAnimationFrame(render);
	};

	initCursor();
}
