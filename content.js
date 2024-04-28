// content.js

// Function to modify the page's HTML
function editPageHTML() {
    const myName = "glamour_loop999"
    if (window.location.href.indexOf(myName) > -1) {
        let a = '<div class="trophies"><span class="trophy perf top10" title="Horde Top 10!"><img src="https://lichess1.org/assets/_z7cHiT/images/trophy/Big-Silver-Cup.png"></span><span class="trophy perf top50" title="Atomic Top 50 player!"><img src="https://lichess1.org/assets/_z7cHiT/images/trophy/Fancy-Gold.png"></span></div>'
        document.body.innerHTML = document.body.innerHTML.replace('<div class="trophies"></div>', a);
        let to_replace = '<span class="online user-link" data-href="/@/glamour_loop999"><i class="line"></i>glamour_loop999<a href="/account/profile" title="Set your flair"><img class="uflair" src="https://lichess1.org/assets/______2/flair/img/food-drink.ice.webp"></a></span>'
        let glamour_loop = '<span class="online user-link" data-href="/@/glamour_loop999"><i class="line"></i><span class="utitle" title="International Master">IM</span>&nbsp;glamour_loop999<a href="/account/profile" title="Set your flair"><img class="uflair" src="https://lichess1.org/assets/______2/flair/img/food-drink.ice.webp"></a></span>'
        document.body.innerHTML = document.body.innerHTML.replace(to_replace, glamour_loop);
    }
}
editPageHTML();