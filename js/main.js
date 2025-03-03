document.addEventListener("DOMContentLoaded", () => {
    //scroll reset on reload
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }


    //phone nav toggle
    const navtoggle = document.querySelector('.nav-toggle');
    const navlist = document.querySelector('.nav-list');

    navtoggle.addEventListener('click', function() {
        if (navlist.style.maxHeight) {
            navlist.style.maxHeight = null;
        } else {
            navlist.style.maxHeight = navlist.scrollHeight + "px";
        }
    });
});