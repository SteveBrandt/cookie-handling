var blockCookie = function () {

    return function () {

        var currentCookies = document.cookie.split(';').map(function (x) {
            return x.trim().split(/(=)/);
        }).reduce(function (a, b) {
            a[b[0]] = a[b[0]] ? a[b[0]] + ', ' + b.slice(2).join('') :
                b.slice(2).join('');
            return a;
        }, {});

        var c_message = document.getElementById('c_message');
        document.getElementById('c_current').innerHTML =
            JSON.stringify(currentCookies)
                .replaceAll(',', '<br>')
                .replaceAll('{', '')
                .replaceAll('}', '');

        for (cookie in currentCookies) {
            if (document.cookies_to_block.includes(cookie)){
                setCookie(cookie,'',0);
                c_message.innerHTML = 'cookie was blocked'
            }
        }

    };
}();

window.setInterval(blockCookie, 100);