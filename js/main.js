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



    //parallax & main background
    const parallax = document.querySelector('.main-parallax');
    const mainbackground = document.querySelector('.main-background');

    let mainbackgroundTopValue = parseInt(window.getComputedStyle(mainbackground).top);

    console.log(mainbackgroundTopValue)


    let lastScrollY = 0;
    function parallaxEffect() {
        let scrollY = window.scrollY;

        if (scrollY !== lastScrollY) {
            parallax.style.transform = `translateY(${scrollY * 0.5}px)`;

            if (scrollY <= mainbackgroundTopValue) {
                mainbackground.style.transform = `translate(-50%, ${scrollY * -1}px)`;
            }

            lastScrollY = scrollY;
        }

        requestAnimationFrame(parallaxEffect);
    }
    requestAnimationFrame(parallaxEffect);








    


});