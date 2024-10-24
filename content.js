// content.js

// Function to modify the page's HTML
function editPageHTML() {
    let username = "glamour_loop999";
    let myFlair = "https://lichess1.org/assets/______2/flair/img/food-drink.ice.webp";
    let silverTrophy = "https://lichess1.org/assets/_GxVjh9/images/trophy/silver-cup-2.png";
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

function addTitleLinkToUser() {
    let userHref = "/@/glamour_loop999";
    // Select all <a> elements with class 'user-link' and href equal to '/@/Uarekomodo9'
    const userLinks = document.querySelectorAll(`a.user-link[href="${userHref}"]`);
    
    // Iterate through each <a> element
    userLinks.forEach(userLink => {
        // Create the new <span> element with the desired content
        const titleLink = document.createElement('span');
        titleLink.className = 'utitle';
        titleLink.innerHTML = 'IM&nbsp;';
        
        // Insert the <span> element inside the <a> element as the first child
        userLink.insertBefore(titleLink, userLink.firstChild);
    });
}

addTitleLinkToUser();