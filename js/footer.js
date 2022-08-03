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

//START GAMES
const gameLinks = [{ link: "https://aaronrs2002.github.io/black-jack/", game: "Black Jack" },
{ link: "https://aaronrs2002.github.io/craps/", game: "Craps" },
{ link: "https://aaronrs2002.github.io/javascript-slot-machine/index.html", game: "Slots" }];
let gameHTML = "";
for (let i = 0; i < gameLinks.length; i++) {
    gameHTML = gameHTML + "<a href='" + gameLinks[i].link + "' class='btn btn-secondary'>" + gameLinks[i].game + "</a>";
}
document.querySelector("#gameLinks").innerHTML = gameHTML;
