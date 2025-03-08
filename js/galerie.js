document.addEventListener("DOMContentLoaded", () => {
    const tempElement = document.createElement("div");
    tempElement.classList.add("even-row-shift");
    document.body.appendChild(tempElement);

    const marginValue = getComputedStyle(tempElement).marginLeft;
    document.body.removeChild(tempElement);

    let shiftMargin = parseFloat(marginValue) || 0;

    function updateHexagonRows() {
        const hexagons = document.querySelectorAll('.honeycomb .hex-hitbox');
        const honeycomb = document.querySelector('.honeycomb');

        if (!honeycomb || hexagons.length === 0) return;

        hexagons.forEach(hex => hex.classList.remove('even-row-shift'));

        if (window.innerWidth < 480) {
            honeycomb.style.left = "0";
            return;
        };

        let previousTop = null;
        let rowIndex = 0;
        let rows = new Map();

        hexagons.forEach((hex, index) => {
            const currentTop = hex.getBoundingClientRect().top;

            if (previousTop !== null && currentTop > previousTop) {
                rowIndex++;
            }

            if (!rows.has(currentTop)) {
                rows.set(currentTop, []);
            }
            rows.get(currentTop).push(hex);

            if (rowIndex % 2 === 1 && (index === 0 || hexagons[index - 1].getBoundingClientRect().top < currentTop)) {
                hex.classList.add('even-row-shift');
            }

            previousTop = currentTop;
        });

        requestAnimationFrame(() => {
            let maxRowWidth = 0;
            rows.forEach(hexes => {
                const firstHex = hexes[0];
                const lastHex = hexes[hexes.length - 1];

                let firstLeft = firstHex.getBoundingClientRect().left;
                let lastRight = lastHex.getBoundingClientRect().right;

                if (firstHex.classList.contains('even-row-shift')) {
                    firstLeft -= shiftMargin;
                }

                maxRowWidth = Math.max(maxRowWidth, lastRight - firstLeft);
            });

            const honeycombWidth = honeycomb.getBoundingClientRect().width;
            const offset = (honeycombWidth - maxRowWidth) / 2;
            honeycomb.style.left = `${offset}px`;
        });
    }

    window.addEventListener('load', updateHexagonRows);
    window.addEventListener('resize', updateHexagonRows);
});
