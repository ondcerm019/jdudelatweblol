class BeeParallax extends HTMLElement {
    connectedCallback() {
      const size = this.getAttribute("size") || "100";
      const orientation = this.getAttribute("orientation") || "1";
      const top = this.getAttribute("top") || "0";
      const side = this.getAttribute("side") || "0";
      const parallaxSpeed = this.getAttribute("parallax-speed") || "0.5";
      const shiftSpeed = this.getAttribute("shift-speed") || "0.5";
      const opacity = this.getAttribute("opacity") || "1";
      const zPos = this.getAttribute("z-position") || "front";

      this.innerHTML = `
        <div class="bee-parallax" parallax-speed="${parallaxSpeed}" shift-speed="${orientation * shiftSpeed}" style="top: ${top}px; ${orientation === "-1" ? `right: ${side}%;` : `left: ${side}%;`} opacity: ${opacity}; z-index: ${zPos === "front" ? `5` : `-5`};">
            <svg width="${size}" height="${size}" style="transform: scaleX(${orientation})">
                <use href="#myBee"></use>
            </svg>
        </div>
      `;
    }
}



document.addEventListener("DOMContentLoaded", () => {
    customElements.define("bee-parallax", BeeParallax);

    const parallaxbees = document.querySelectorAll("bee-parallax div");
    const parallaxSpeeds = new Map();
    const shiftSpeeds = new Map();
    parallaxbees.forEach(b => {
        parallaxSpeeds.set(b, parseFloat(b.getAttribute("parallax-speed")) || 0);
        shiftSpeeds.set(b, parseFloat(b.getAttribute("shift-speed")) || 0);
    });


    const beeWing1 = document.getElementById("shape04");
    const beeWing2 = document.getElementById("shape05");

    function beeWingFlutter() {

        if (beeWing1.style.display === "none" || beeWing1.style.display === "") {
            beeWing1.style.display = "inherit";
            beeWing2.style.display = "none";
        } else {
            beeWing1.style.display = "none";
            beeWing2.style.display = "inherit";
        }
    }
    setInterval(beeWingFlutter, 100)




    
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


    let lastScrollY = 0;
    function parallaxEffect() {
        let scrollY = window.scrollY;

        if (scrollY !== lastScrollY) {
            //bg parallax
            parallax.style.transform = `translateY(${scrollY * 0.5}px)`;

            //main parallax opacity
            let parallaxopacity = 1 - (scrollY / 1000);
            parallaxopacity = Math.min(1, parallaxopacity);
            parallax.style.setProperty("--main-parallax-opacity", parallaxopacity);

            //main bg opacity
            let mbgopacity = 0.7 + (scrollY / 1000) * 0.3;
            mbgopacity = Math.min(1, mbgopacity);
            mainbackground.style.setProperty("--main-background-opacity", mbgopacity);


            //parallax bees
            parallaxbees.forEach(b => {
                const pSpeed = parallaxSpeeds.get(b);
                const shift = shiftSpeeds.get(b);
                b.style.transform = `translate(${scrollY * shift}px, ${scrollY * pSpeed}px)`;
            });
            

            



            lastScrollY = scrollY;
        }

        requestAnimationFrame(parallaxEffect);
    }
    requestAnimationFrame(parallaxEffect);








    


});