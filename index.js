(function buildWrap() {
	// Content
	const content = ["Hey! 👋", "Welcome."];

	// Wrapper
	let contentDiv = document.createElement("div");

	// Loop through content
	buildText(content, contentDiv);

	// Append all above to body
	document.body.appendChild(contentDiv);

	// Animate Text
	animateText(content, contentDiv);
})();

function buildText(content, contentDiv) {
	for (var key in content) {
		let contentText = document.createElement("span");
		contentText.innerHTML = content[key];
		contentDiv.appendChild(contentText);
	}
}

function animateText(content, contentDiv) {
	let singleText = document.querySelectorAll("div span");
	for (let key in content) {
		setTimeout(function() {
			fadeInX(singleText[key], -50, 0, 1200);
			setTimeout(function() {
				fadeOutX(singleText[key - 1], 50, 1200, 1200);
			}, 20);

			if (key == content.length - 1) {
				setTimeout(function() {
					setTimeout(function() {
						fadeOutX(singleText[key], 25, 1200, 1200);
					}, 20);

					animateText(content, contentDiv);
				}, 3000);
			}
		}, key * 3000);
	}
}

// Animations
var fadeInX = function(context, direction, delay, speed) {
	direction = direction + "px";
	speed = speed + "ms";
	context.style.transform = "translateX" + "(" + direction + ")";
	context.style.display = "flex";
	context.style.webkitClipPath =
		"polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)";

	setTimeout(function() {
		context.style.transition =
			" all " + speed + " cubic-bezier(0.19, 1, 0.22, 1)";
		context.style.transform = "translateX(0)";
		context.style.webkitClipPath = "polygon(0 100%, 100% 100%, 100% 0, 0 0)";
	}, delay);
};

var fadeOutX = function(context, direction, delay, speed) {
	direction = direction + "px";
	speed = speed + "ms";
	context.style.transition = " all " + speed + " cubic-bezier(0.19, 1, 0.22, 1)";
	context.style.transform = "translateX" + "(" + direction + ")";

	context.style.webkitClipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";

	setTimeout(function(delay) {
		context.style.display = "none";
	}, delay);
};

const toggleButton = document.querySelector('.dark-light');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});