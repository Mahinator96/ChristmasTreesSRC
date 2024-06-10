(function(){
    const getRandomIntInclusive = (min, max) => {
        const minimum = Math.min(min, max);
        const maximum = Math.max(min, max);

        return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    };

    const createSnow = (min, max, sat) => {
        const style = document.createElement('style');
        document.head.append(style);

        style.textContent = `
            body {
                position: relative;
            }

            .snow {
                position: fixed;
                width: 20px;
                height: 20px;
                top: -20px;
                background-repeat: no-repeat;
                background-position: center;
                pointer-events: none;
                animation: fall;
                animation-timing-function: ease-out;
            }

            @keyframes fall {
                100% {
                    transform: translate(0, calc(100vh + 20px));
                }
            }
        `;

        const count = 4;

        const createSnowItem = () => {
            const snowItem = document.createElement('div');
            snowItem.classList.add('snow');
            document.body.append(snowItem);

            const time = getRandomIntInclusive(min, max);

            setTimeout(() => {
                snowItem.remove();
            }, time * 1000);

            snowItem.style.cssText = `
                left: ${getRandomIntInclusive(0, 100)}%;
                background-image: url('img/snow/snowflake-${getRandomIntInclusive(1, count)}.svg');
                animation-duration: ${time}s;
            `;

        };
        
        setInterval(createSnowItem, sat);
    };

    createSnow(10, 25, 1300);
}())