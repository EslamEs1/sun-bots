// Start btn NavBar
let btnNav = document.querySelector(".btn-link");
let linK = document.querySelector(".nav-link2");
btnNav.addEventListener("click", () => {
    if (linK.hasAttribute("style", "block")) {
        linK.removeAttribute("style");
    } else {
        linK.style.display = "block";
    }
});
// Start Top Video
let lVideo = document.querySelector(".list-video");
lVideo.addEventListener("click", (ele) => {
    ele.preventDefault();
    document.getElementById("myvideo").src = ele.target.href;
});
// Start Fb Messanger
var chatbox = document.getElementById("fb-customer-chat");
chatbox.setAttribute("page_id", "102173102243671");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function () {
    FB.init({
        xfbml: true,
        version: "v12.0",
    });
};

(function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
