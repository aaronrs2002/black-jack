/*const themesList = [
    "https://bootswatch.com/5/slate/bootstrap.css",
    "https://bootswatch.com/5/cerulean/bootstrap.css",
    "https://bootswatch.com/5/darkly/bootstrap.css",
    "https://bootswatch.com/5/litera/bootstrap.css",
    "https://bootswatch.com/5/materia/bootstrap.css",
    "https://bootswatch.com/5/sandstone/bootstrap.css",
    "https://bootswatch.com/5/superhero/bootstrap.css",
    "https://bootswatch.com/5/cosmo/bootstrap.css",
    "https://bootswatch.com/5/flatly/bootstrap.css",
    "https://bootswatch.com/5/lumen/bootstrap.css",
    "https://bootswatch.com/5/minty/bootstrap.css",
    "https://bootswatch.com/5/simplex/bootstrap.css",
    "https://bootswatch.com/5/solar/bootstrap.css",
    "https://bootswatch.com/5/united/bootstrap.css",
    "https://bootswatch.com/5/cyborg/bootstrap.css",
    "https://bootswatch.com/5/journal/bootstrap.css",
    "https://bootswatch.com/5/lux/bootstrap.css",
    "https://bootswatch.com/5/pulse/bootstrap.css",
    "https://bootswatch.com/5/sketchy/bootstrap.css",
    "https://bootswatch.com/5/spacelab/bootstrap.css",
    "https://bootswatch.com/5/yeti/bootstrap.css",
];*/

const themesList = ["slate", "cerulean", "darkly", "litera", "materia", "sandstone", "superhero", "cosmo", "flatly", "lumen", "minty", "simplex", "solar", "united", "cyborg", "journal", "lux", "pulse", "sketchy", "spacelab", "yeti",];

let chosenTheme;
//START GAME LINKS
const gameLinks = [{ link: "https://aaronrs2002.github.io/black-jack/?theme=", game: "Black Jack" },
{ link: "https://aaronrs2002.github.io/craps/?theme=", game: "Craps" },
{ link: "https://aaronrs2002.github.io/javascript-slot-machine/index.html?theme=", game: "Slots" }];

function setGameLinks(themePass) {
    let balance = "default";
    if (localStorage.getItem("balance")) {
        balance = localStorage.getItem("balance");
    }
    let gameHTML = "";
    for (let i = 0; i < gameLinks.length; i++) {

        gameHTML = gameHTML + "<a href='" + gameLinks[i].link + themePass + "&balance=" + balance + "' class='btn btn-secondary'>" + gameLinks[i].game + "</a>";
    }
    document.querySelector("#gameLinks").innerHTML = gameHTML;
}

//START THEMES
let themeOptions = "<option value='css/bootstrap.min.css'>Select Theme</option>";
for (let i = 0; i < themesList.length; i++) {
    themeOptions = themeOptions + "<option value='" + themesList[i] + "'>" + themesList[i].substring(25, themesList[i].lastIndexOf("/")) + "</option>";
}
document.getElementById("themes").innerHTML = themeOptions;

function changeTheme() {
    let whichTheme = document.getElementById("themes").value;
    document.getElementById("themedStyle").setAttribute("href", "https://bootswatch.com/5/" + whichTheme + "/bootstrap.css");
    chosenTheme = whichTheme.replace("https://bootswatch.com/5/", "").replace("/bootstrap.css");
    console.log("chosenTheme: " + chosenTheme);
    localStorage.setItem("theme", chosenTheme);
    setGameLinks(chosenTheme);
}

let url = window.location;
let themeVal = {};
(url + "?")
    .split("?")[1]
    .split("&")
    .forEach(function (pair) {
        pair = (pair + "=").split("=").map(decodeURIComponent);
        if (pair[0].length) {
            themeVal[pair[0]] = pair[1];
            if (pair[0] === "theme") {
                const themeFromUrl = "https://bootswatch.com/5/" + pair[1] + "/bootstrap.css";
                document.getElementById("themedStyle").setAttribute("href", themeFromUrl);
                localStorage.setItem("theme", pair[1]);
            }
            if (pair[0] === "balance") {
                localStorage.setItem("balance", pair[1]);
            } else {
                localStorage.setItem("balance", 500);
            }
        }
    });
if (localStorage.getItem("theme")) {
    setGameLinks(localStorage.getItem("theme"));
    document.getElementById("themedStyle").setAttribute("href", "https://bootswatch.com/5/" + localStorage.getItem("theme") + "/bootstrap.css");
} else {
    setGameLinks("cyborg");
}
//END THEMES

//START SOCIAL MEDIA
const socialMedia = [
    { link: "https://www.linkedin.com/in/aaronrs2002", theClass: "fab fa-linkedin" },
    { link: "https://github.com/aaronrs2002", theClass: "fab fa-github" },
    { link: "https://www.youtube.com/channel/UC_cqZ5WhobgOTFjRqcZKgKg", theClass: "fab fa-youtube" },
    { link: "https://www.instagram.com/aaronrs2002/", theClass: "fab fa-instagram" },
    { link: "mailto:aaron@web-presence.biz", theClass: "far fa-paper-plane" }
];
let socialHTML = "";
for (let i = 0; i < socialMedia.length; i++) {
    socialHTML = socialHTML + "<a class='p-2' href='" + socialMedia[i].link + "' target='_blank' title='" + socialMedia[i].link + "' ><i class='" + socialMedia[i].theClass + "' ></i></a>";
}
document.querySelector("#socialList").innerHTML = socialHTML;

