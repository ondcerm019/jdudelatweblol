document.addEventListener("DOMContentLoaded", () => {
    console.log("Stránka načtena!");


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