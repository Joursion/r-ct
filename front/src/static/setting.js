/**
 * Created by m on 16-5-10.
 */
window.load = function () {
    if (window.localStorage.bgi) {
        console.log(window.localStorage.bgi);
        let bgi = window.localStorage.bgi;
        let body = document.querySelector('body');
        body.style.backgroundImage = bgi;
    }
};

