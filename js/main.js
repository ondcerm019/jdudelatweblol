document.addEventListener("DOMContentLoaded", () => {
    console.log("Stránka načtena!");


    const navtoggle = document.getElementById('navToggle');
    const navlist = document.getElementById('navList');

    navtoggle.addEventListener('click', function() {
        navlist.classList.toggle('sm-nav-show');
    });


});