(function () {
  if (document.querySelector("header")) {
    const garlandInit = () => {
      const header = document.querySelector("header");

      const style = document.createElement("style");
      document.head.append(style);

      const elkaLeft = document.createElement("div");
      elkaLeft.classList.add("garland-elka-left");
      header.append(elkaLeft);

      const elkaRight = document.createElement("div");
      elkaRight.classList.add("garland-elka-right");
      header.append(elkaRight);

      const garland = document.createElement("div");
      garland.classList.add("garland", "garland-2");
      header.append(garland);

      style.textContent = `
                header {
                    position: relative;
                    // overflow: visible;
                }
                .garland-elka-left,
                .garland-elka-right {
                    position: absolute;
                    inset: 0;
                    background-image: url(./img/decor-tree-ball.png);
                    background-repeat: no-repeat;
                    pointer-events: none;
                    background-size: auto 80%;
                    z-index: 100;
                }
    
                .garland-elka-right { 
                    transform: scale(-1, 1);
                }
    
                .garland {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 36px;
                    background-image: url(./img/decor-light.png);
                    pointer-events: none;
                    z-index: 99;
                }
    
                .garland-1 {
                    background-position: 0 -36px;
                }
    
                .garland-2 {
                    background-position: 0 -72px;
                }
    
                .garland-3 {
                    background-position: 0 -108px;
                }
    
                @media (max-width: 1600.9px) {
                    .garland-elka-left,
                    .garland-elka-right {
                        background-size: 7%;
                    }
    
                    .garland {
    
                    }
                }
                @media (max-width: 1024.9px) {
                    .garland-elka-left,
                    .garland-elka-right {
                        background-size: 40px;
                    }
    
                    .garland {
                        height: 18px;
                        background-image: url(./img/decor-light-tablet.png);
                    }
    
                    .garland-1 {
                        background-position: 0 -18px;
                    }
                    .garland-2 {
                        background-position: 0 -36px;
                    }
                    .garland-3 {
                        background-position: 0 -54px;
                    }
                }
                @media (max-width: 768.9px) {
                    .garland-elka-left,
                    .garland-elka-right {
                        background-size: 24px;
                    }
    
                    .garland {
                        height: 12px;
                        background-image: url(./img/decor-light-mobile.png);
                    }
    
                    .garland-1 {
                        background-position: 0 -12px;
                    }
                    .garland-2 {
                        background-position: 0 -24px;
                    }
                    .garland-3 {
                        background-position: 0 -36px;
                    }
                }
            `;

      const garlandClasses = ["garland-1", "garland-2", "garland-3"];

      let currentIndex = 0;

      setInterval(() => {
        const prevIndex = currentIndex;

        while (prevIndex === currentIndex) {
          currentIndex = Math.round(
            Math.random() * (garlandClasses.length - 1)
          );
        }

        garland.className = `garland ${garlandClasses[currentIndex]}`;
      }, 1500);
    };

    garlandInit();
  }
})();
