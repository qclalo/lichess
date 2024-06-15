// content.js

// Function to modify the page's HTML
function editPageHTML() {
    let username = "glamour_loop999";
    let myFlair = "https://lichess1.org/assets/______2/flair/img/food-drink.ice.webp";
    let silverTrophy = "https://lichess1.org/assets/_z7cHiT/images/trophy/Big-Silver-Cup.png";
    let goldTrophy = "https://lichess1.org/assets/_z7cHiT/images/trophy/Fancy-Gold.png";

    if (window.location.href.indexOf(username) > -1) {
        // Select the trophies container
        const trophiesContainer = document.querySelector('.trophies');
        if (trophiesContainer) {
            // Clear any existing trophies
            trophiesContainer.innerHTML = '';

            // Create and append the first trophy
            const trophy1 = document.createElement('span');
            trophy1.className = 'trophy perf top10';
            trophy1.title = 'Horde Top 10!';
            trophy1.innerHTML = `<img src="${silverTrophy}">`;
            trophiesContainer.appendChild(trophy1);

            // Create and append the second trophy
            const trophy2 = document.createElement('span');
            trophy2.className = 'trophy perf top50';
            trophy2.title = 'Atomic Top 50 player!';
            trophy2.innerHTML = `<img src="${goldTrophy}">`;
            trophiesContainer.appendChild(trophy2);
        }

        // Modify user link
        const userLink = document.querySelector(`.online.user-link[data-href*="/@/${username}"]`);
        if (userLink) {
            // Add the title
            const titleElement = document.createElement('span');
            titleElement.className = 'utitle';
            titleElement.title = 'International Master';
            titleElement.textContent = 'IM ';

            // Insert the title before the username
            const lineElement = userLink.querySelector('.line');
            lineElement.insertAdjacentElement('afterend', titleElement);

            // Update the flair image
            const imgElement = userLink.querySelector('.uflair');
            if (imgElement) {
                imgElement.src = myFlair;
            }

            // Ensure the username remains unchanged after modification
            const usernameTextNode = userLink.childNodes[2];
            if (usernameTextNode.nodeType === Node.TEXT_NODE) {
                usernameTextNode.textContent = username;
            }
        }
    }
}

editPageHTML();
