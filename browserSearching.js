// First, the variables!
var link = document.getElementById("searchbar");

var button = {
	menu: document.getElementById("dropdown"),
	enter: document.getElementById("enter"),
	back: document.getElementById("back"),
	forward: document.getElementById("forward")
}

var more = document.getElementById("more");

//I am setting some stuff up first before functions

var pageReady = false;

var webPage = document.createElement("iframe");

if (document.cookie != "") {
	link = document.cookie;
} else {
	link = "browser.html"
}

webPage.width = 1277.5;
webPage.height = 640;
webPage.src = link;
webPage.style = "border-width: 0px;";

// Now it is time for functions!

function enableMore() {
    if (more.style.display == "block") {
        more.style.display = "none" // Double-equals changed to single
    } else {
        more.style.display = "block" // Double-equals changed to single
    }
}

function update() {
	link = document.getElementById("searchbar").value;

	var container = document.getElementById("browser")

	if (pageReady == false) {
		container.appendChild(webPage)
		pageReady = true;
	}

	setTimeout(update, 1);
}

function openPage(page) {
	document.cookie = "Page=" + link.value;
	window.open("index.html", "_self", false);
}
