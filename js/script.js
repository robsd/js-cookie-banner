cookieConsent = localStorage.getItem('cookie-consent');
cookieBanner = document.getElementById('cookie-banner');

if (cookieConsent) {
	cookieBanner.remove();
}

function acceptCookies() {
	localStorage.setItem('cookie-consent', true);
	cookieBanner.remove();
}