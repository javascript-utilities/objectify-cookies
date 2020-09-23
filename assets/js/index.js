function calculateCookieExpiration(days = 1) {
    days = Number(days);
    if (isNaN(days)) {
        days = 1;
    }
    const date = new Date();
    const now = date.getTime();
    return date.setTime(now + 1 * 24 * 60 * 60 * 1000);
}


window.addEventListener('load', () => {
  document.cookies = `key_name=something;expires=${calculateCookieExpiration()};path=/`;

  const cookies = objectifyCookies();
  console.log(`cookies['key_name'] -> ${cookies['key_name']}`);
});

