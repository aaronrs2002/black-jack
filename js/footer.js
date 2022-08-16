
/*FOOTER DATE*/
const today = new Date();
document.getElementById("year").innerHTML = "<i><label><a href='https://web-presence.biz/?src=web-presence-games' class='text-primary' target='_bank'>	&copy; Web-Precence LLC " +
    today.getFullYear() + "</a></label></i>";

/*START THEMES*/
const themesList = ["united", "slate", "cerulean", "darkly", "litera", "materia", "sandstone", "superhero", "cosmo", "flatly", "lumen", "minty", "simplex", "solar", "cyborg", "journal", "lux", "pulse", "sketchy", "spacelab", "yeti",];
let chosenTheme;

/*START THEMES*/
//START GAME LINKS
const gameLinks = [{ link: "https://aaronrs2002.github.io/black-jack/?theme=", game: "Black Jack" },
{ link: "https://aaronrs2002.github.io/craps/?theme=", game: "Craps" },
{ link: "https://aaronrs2002.github.io/javascript-slot-machine/index.html?theme=", game: "Slots" }];
let url = window.location;
let themeVal = {};
let themeOptions = "";


for (let i = 0; i < themesList.length; i++) {
    themeOptions = themeOptions + "<option value='" + themesList[i] + "'>Theme: " + themesList[i].substring(25, themesList[i].lastIndexOf("/")) + "</option>";
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
/*SPLIT PARAMS*/
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
                localStorage.setItem("balance", pair[1].replace("#", ""));
                console.log("found url parameter. Should set local storage balance.");

            } else {
                localStorage.setItem("balance", 500);
            }
        }
    });
if (localStorage.getItem("theme")) {
    setGameLinks(localStorage.getItem("theme"));
    document.getElementById("themedStyle").setAttribute("href", "https://bootswatch.com/5/" + localStorage.getItem("theme") + "/bootstrap.css");
} else {
    setGameLinks("united");
    localStorage.setItem("theme", "united");
}

//END THEMES



function navigateGames(selected) {
    let balance = 500;
    let setTheme = "united";
    if (localStorage.getItem("theme")) {
        setTheme = localStorage.getItem("theme");
    }
    if (localStorage.getItem("balance")) {
        balance = localStorage.getItem("balance");
    }
    window.location.href = gameLinks[selected].link + setTheme + "&balance=" + balance + "&";
}

function setGameLinks() {
    let gameHTML = "";
    for (let i = 0; i < gameLinks.length; i++) {
        let active = "";
        let hrefStr = gameLinks[i].link.toString();
        const lastSlash = hrefStr.lastIndexOf("/");
        hrefStr = hrefStr.substring(0, lastSlash);
        if (url.toString().indexOf(hrefStr) !== -1) {
            active = "active";
        }
        gameHTML = gameHTML + "<button onClick='javascript:navigateGames(" + i + ")' class='btn btn-secondary " + active + "'>" + gameLinks[i].game + "</button>";
    }
    document.querySelector("#gameLinks").innerHTML = gameHTML;
}

/*START NAVIGATING ANIMATION*/
function tadaRollover(element) {

    document
        .querySelector("[data-tada='" + element + "']")
        .classList.add("tada");
}
function tadaRollout(element) {
    document
        .querySelector("[data-tada='" + element + "']")
        .classList.remove("tada");
}


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
    socialHTML = socialHTML + `<a class="p-2 text-primary"  href="${socialMedia[i].link
        }" target="_blank" title="${socialMedia[i].link}" ><i class="${socialMedia[i].theClass
        } animated"  onmouseover="javascript:tadaRollover('${socialMedia[i].theClass
        }')" onmouseout="javascript:tadaRollout('${socialMedia[i].theClass
        }')" data-tada="${socialMedia[i].theClass
        }"></i></a>`;
}
document.querySelector("#socialList").innerHTML = socialHTML;

