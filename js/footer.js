
/*FOOTER DATE*/
const today = new Date();
document.getElementById("year").innerHTML = "<i><label><a href='https://web-presence.biz/?src=web-presence-games' class='text-primary' target='_bank'>	&copy; Web-Presence LLC " +
    today.getFullYear() + "</a></label></i>";

/*START THEMES*/
const themesList = ["Spacelab", "United", "Slate", "Cerulean", "Darkly", "Litera", "Materia", "Sandstone", "Superhero", "Cosmo", "Flatly", "Lumen", "Minty", "Simplex", "Solar", "Cyborg", "Journal", "Lux", "Pulse", "Sketchy", "Yeti",];
let chosenTheme;

/*START THEMES*/
//START GAME LINKS
const gameLinks = [{ link: "https://aaronrs2002.github.io/black-jack/?theme=", game: "21" }, { link: "https://aaronrs2002.github.io/texas-holdem/?theme=", game: "Poker" },
{ link: "https://aaronrs2002.github.io/craps/?theme=", game: "Craps" },
{ link: "https://aaronrs2002.github.io/javascript-slot-machine/index.html?theme=", game: "Slots" }, { link: "https://aaronrs2002.github.io/word-game/?theme=", game: "WordFun" }];
let url = window.location;
let themeVal = {};
let themeOptions = "<option value='default'>Select Theme</option>";


for (let i = 0; i < themesList.length; i++) {
    themeOptions = themeOptions + "<option value='" + themesList[i].toLocaleLowerCase() + "'>Theme: <span class='capitalize'>" + themesList[i] + "</span></option>";
}
document.getElementById("themes").innerHTML = themeOptions;

function changeTheme() {
    let whichTheme = document.getElementById("themes").value;
    if (whichTheme === "default") {
        return false;
    } else {
        // document.getElementById("themedStyle").setAttribute("href", "https://bootswatch.com/5/" + whichTheme + "/bootstrap.css");
        chosenTheme = whichTheme.replace("https://bootswatch.com/5/", "").replace("/bootstrap.css");
        localStorage.setItem("theme", chosenTheme);
        //setGameLinks(chosenTheme);
        window.location = "?theme=" + chosenTheme + "&balance=" + localStorage.getItem("balance") + "&";
    }

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

            }
        }
    });
if (localStorage.getItem("theme")) {
    setGameLinks(localStorage.getItem("theme"));
    document.getElementById("themedStyle").setAttribute("href", "https://bootswatch.com/5/" + localStorage.getItem("theme") + "/bootstrap.css");
} else {
    setGameLinks("spacelab");
    localStorage.setItem("theme", "spacelab");
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

//START GLOBAL ALERT
function globalAlert(alertLevel, message) {

    document.getElementById("globalAlert").classList.remove("hide");
    document.getElementById("globalAlert").classList.add(alertLevel);
    document.getElementById("globalAlert").classList.add("animated");
    document.getElementById("globalAlert").innerHTML = message;

    setTimeout(function () {
        document.getElementById("globalAlert").classList.add("hide");
        document.getElementById("globalAlert").classList.remove(alertLevel);
    }, 5000);

}

/*START GLOBAL TOGGLE FUNCTION*/

function toggle(element) {
    [].forEach.call(document.querySelectorAll("[data-toggle]"), function (e) {
        e.classList.add("hide");
    });

    [].forEach.call(document.querySelectorAll("[data-toggle='" + element + "']"), function (e) {
        e.classList.remove("hide");
    });
}

/*END GLOBAL TOGGLE FUNCTION*/