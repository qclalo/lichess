// content.js

// Function to modify the page's HTML
function editPageHTML() {
    let username = "glamour_loop999";
    let myFlair = "https://lichess1.org/assets/______2/flair/img/food-drink.ice.webp";
    let silverTrophy = "https://lichess1.org/assets/_z7cHiT/images/trophy/Big-Silver-Cup.png";
    let goldTrophy = "https://lichess1.org/assets/_z7cHiT/images/trophy/Fancy-Gold.png";

    if (window.location.href.indexOf(username) > -1) {
        let trophy1 =
            '<span class="trophy perf top10" title="Horde Top 10!">' +
            `<img src="${silverTrophy}"></span>`;
        let trophy2 =
            '<span class="trophy perf top50" title="Atomic Top 50 player!">' +
            `<img src="${goldTrophy}"></span>`;

        let defaultTrophies = '<div class="trophies"></div>'
        let customTrophies = `<div class="trophies">${trophy1}${trophy2}</div>`;

        document.body.innerHTML = document.body.innerHTML.replace(
            defaultTrophies,
            customTrophies
        );

        let defaultUsername =
            `<span class="online user-link" data-href="/@/${username}">` +
            `<i class="line"></i>${username}` +
            '<a href="/account/profile" title="Set your flair">' +
            `<img class="uflair" src="${myFlair}"></a></span>`;

        let customUsername =
            `<span class="online user-link" data-href="/@/${username}">` +
            '<i class="line"></i>' +
            '<span class="utitle" title="International Master">IM</span>&nbsp;' +
            username +
            '<a href="/account/profile" title="Set your flair">' +
            `<img class="uflair" src="${myFlair}"></a></span>`;

        document.body.innerHTML = document.body.innerHTML.replace(
            defaultUsername,
            customUsername
        );
    }
}

editPageHTML();
