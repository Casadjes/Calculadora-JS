const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const container = document.getElementById("container");

buttons.forEach((item) => {
	item.onclick = () => {
		if (item.id == "clear") {
			display.innerText = "";
		} else if (item.id == "backspace") {
			let string = display.innerText.toString();
			display.innerText = string.substr(0, string.length - 1);
		} else if (display.innerText != "" && item.id == "equal") {
			setInterval(() => {
				const random = getRandom();
				container.style.backgroundColor = colors[random];
			}, 5);
			display.innerText = eval(display.innerText);
		} else if (display.innerText == "" && item.id == "equal") {
			setInterval(() => {
				const random = getRandom();
				container.style.backgroundColor = colors[random];
			}, 5);
			display.innerText = "Null";
			setTimeout(() => (display.innerText = ""), 2000);
		} else {
			display.innerText += item.id;
		}
	};
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark = true;
themeToggleBtn.onclick = () => {
	calculator.classList.toggle("dark");
	themeToggleBtn.classList.toggle("active");
	isDark = !isDark;
};

const colors = [
	"blue",
	"red",
	"yellow",
	"orange",
	"purple",
	"pink",
	"gray",
	"darkblue",
	"crimsom",
	"black",
	"violet",
	"cornblue",
	"steelblue",
	"darkred",
	"brown",
	"lightred",
	"lightgreen",
	"lightyellow"
];

function getRandom() {
	return Math.floor(Math.random() * colors.length);
}
