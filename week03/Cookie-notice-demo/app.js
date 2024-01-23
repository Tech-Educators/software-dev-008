const acceptButton = document.getElementById("accept")
const declineButton = document.getElementById("decline")
const cookieNotice = document.getElementById("cookie-notice")

acceptButton.addEventListener("click", () => {
    console.log('Accepted!')
})

declineButton.addEventListener("click", () => {
    console.log('Declined!')
})

// add a cookie when the user accepts and hide the cookie notice
acceptButton.addEventListener("click", () => {
cookieNotice.style.display = "none"
document.cookie = "cookiesAccepted=true"
})

// add a cookie when the user declines and hide the cookie notice
declineButton.addEventListener("click", () => {
    cookieNotice.style.display = "none"
    document.cookie = "cookiesAccepted=false"
})

// read the cookie when the page loads and do not display cookie notice if preferences already stated
const cookiesAccepted = document.cookie.includes("cookiesAccepted")
if(cookiesAccepted) {
    cookieNotice.style.display = "none"
}
