const movies = [
	{ title: "Judas and the Black Messiah", stars: 5, url: "#" },
	{ title: "Ma Rainey's Black Bottom", stars: 4, url: "#" },
	{ title: "Mank", stars: 4, url: "#" },
	{ title: "Minari", stars: 4, url: "#" },
	{ title: "Nomadland", stars: 4, url: "#" },
	{ title: "Promising Young Woman", stars: 3, url: "#" },
	{ title: "Sound of Metal", stars: 3, url: "#" },
	{ title: "The Father", stars: 3, url: "#" },
	{ title: "The Trial of the Chicago 7", stars: 3, url: "#" },
	{ title: "The United States vs. Billie Holiday", stars: 3, url: "#" },
];

const oscarWinners = document.getElementById("list");

for (let i = 0; i < movies.length; i++) {
	const winnerTitles = document.createElement("div");
	winnerTitles.innerText = movies[i].title;
	winnerTitles.id = movies[i].title;
	oscarWinners.appendChild(winnerTitles);
}

const button = document.createElement("button");
button.innerText = "See Winner";
let buttons = document.querySelector(".buttons");
buttons.appendChild(button);

const button2 = document.createElement("button");
button2.innerText = "See nominated";
buttons.appendChild(button2);

const button3 = document.createElement("button");
button3.innerText = "Refresh";
buttons.appendChild(button3);

button.addEventListener("click", function () {
	for (let i = 0; i < movies.length; i++) {
		if (movies[i].title === "Nomadland") {
			console.log(movies[i].title);
		}
	}

	let winner = document.getElementById("Nomadland");
	let winner2 = document.getElementById("The Father");
	let winner3 = document.getElementById("Promising Young Woman");
	let winner4 = document.getElementById("Mank");
	let winner5 = document.getElementById("Sound of Metal");
	winner.classList.add("winner");
	winner2.classList.add("winner");
	winner3.classList.add("winner");
	winner4.classList.add("winner");
	winner5.classList.add("winner");
});

button2.addEventListener("click", function () {
	let nominated = document.querySelector("#list");
	nominated.classList.add("nominated");
});

button3.addEventListener("click", function () {
	let winner5 = document.getElementById("Sound of Metal");
	let winner4 = document.getElementById("Mank");
	let winner3 = document.getElementById("Promising Young Woman");
	let winner2 = document.getElementById("The Father");
	let winner = document.getElementById("Nomadland");
	let nominated = document.querySelector("#list");
	winner5.classList.remove("winner");
	winner4.classList.remove("winner");
	winner3.classList.remove("winner");
	winner2.classList.remove("winner");
	winner.classList.remove("winner");
	nominated.classList.remove("nominated");
});
