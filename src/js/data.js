(function () {
  // async function getData() {

  //     const data = await fetch('../files/data.json')
  //         .then(
  //             function(response) {
  //                 if (response.status !== 200) {
  //                     console.log('Looks like there was a problem. Status Code: ' + response.status);

  //                     return;
  //                 }

  //                 return response.json()
  //             }
  //         )
  //         .catch(function(err) {
  //             console.log('Fetch Error :-S', err);
  //         });

  //         return data;
  // }

  const data = {
    product1: {
      title: "Пихта Фразера",
      features:
        "Пихта Фразера чаще использовалась в качестве рождественской ёлки Белого дома",
      hero: "Мягкий аромат, форма, и способность сохранять мягкие иголки в длительного времени, делают её одним из лучших деревьев для рождества",
      description:
        "<p>Пихта Фразера отчасти похожа на обычную ель, но выглядит более эффектно и презентабельно.</p><p>Дерево имеет симметричную конусообразную форму, с любой стороны выглядит идеально. Ветви, плотно расположенные на стволе, направлены вверх. Длинные иголки довольно мягкие и не колются, имеют ярко-зеленый цвет. Пихты выращиваются в питомнике. Их идеальный внешний вид обеспечивается благодаря грамотному уходу (подрезка, удобрение и т.д.). Аромат пихты очень приятный: лесной, натуральный.</p><p>В отличие от обычных елей, пихта Фразера в срезанном виде может стоять в помещении долго – до 2 месяцев. Она не осыпается, не желтеет, выглядит на протяжении этого времени свежо и красиво. Важно найти дереву правильное место в помещении — там, где максимально прохладно.</p><p>Уход за пихтой простой, но должен быть регулярным. В подставке у дерева всегда должна быть чистая вода, которую надо добавлять 1-2 раза в день, а в первые сутки чаще. Крону можно опрыскивать водой из пульверизатора. Увлажнение помогает пихте оставаться свежей. Перед тем, как установить датскую ель, ствол рекомендуется слегка подрубить (на пару сантиметров), чтобы вода внутрь впитывалась лучше.</p><p>Пихта Фразера украсит помещение и сделает праздники более яркими и атмосферными.</p>",
      img: "img/product-1.jpg",
      price: 2200,
    },
    product2: {
      title: "Русская ель",
      features:
        "Русская ель — наиболее традиционная разновидность рождественских деревьев, которую можно встретить в большинстве советских фильмов про новый год",
      hero: "Отличительной особенностью русской ёлки являются выраженный хвойный запах, короткие колючие иголки и сравнительно менее пышная крона",
      description:
        "<p>Живые русские ёлки – обязательный атрибут новогодних праздников. Это самая недорогая разновидность рождественских деревьев, поэтому купить русскую ёлку можно совсем недорого в сравнении с зарубежными аналогами. Стоять она будет не так долго, как, например, пихта, но при правильном уходе русская ель сохранит эффектный и свежий вид на все новогодние праздники.</p><p>Особенность русской елки – ветвистая, неоднородная крона. Ветки дерева ветвятся в разных направлениях, создавая эффект пушистости. Хвоя у этого вида елей короткая и колючая. Несомненным преимуществом русских елей является насыщенный смолистый аромат, создающий праздничную атмосферу.</p><p>Купить высокую Русскую ёлку можно для украшения загородных домов, магазинов, улиц и площадей. Лучше всего установить ее на улице, так хвоя дольше сохранит свою свежесть и не будет осыпаться. Высокие русские ёлки выглядят особенно эффектно. Такое дерево можно установить на площади, перед входной группой торгового центра, административного здания или во дворе частного дома.</p>",
      img: "img/product-2.jpg",
      price: 2000,
    },
    product3: {
      title: "Сибирская пихта",
      features:
        "Пихта сибирская является одной из самых красивых и ароматных хвойных пород и ее часто можно встретить в парках и садах",
      hero: "Хвоя Сибирской пихты в отличии от еловой крупнее, зеленее, совершенно не колючая и мягкая как трава",
      description:
        "<p>Сибирская пихта шикарно выглядит на праздничных фото. Ее иголки не отличаются колючестью, поэтому украшение дерева не связано с риском уколоться.</p><p>Хвойный аромат ели очень приятный и насыщенный, но при этом ненавязчивый. Благодаря ему помещение, где установлена Сибирская пихта, наполняется особой атмосферой уюта и праздника.</p><p>Стойкость выделяет ее среди других деревьев. Иголки не осыпаются, а дерево не желтеет раньше времени. Сибирская пихта способна простоять 8 недель при правильном уходе.</p><p>Пихта сибирская является одной из самых красивых и ароматных хвойных пород и ее часто можно встретить в парках и садах</p>",
      img: "img/product-2.jpg",
      price: 2500,
    },
  };

  /* Находим кнопки "Подробнее" и вешаем обработчик "click" с созданием окна с доп. инфо */
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("product__button-more")) {
      const dataJsonItem = e.target.dataset.json;
      createModalInfo(dataJsonItem);
    }
  });

  /* Функция создания модального окна с доп. инфо */
  async function createModalInfo(item) {
    // const data = await getData();

    const dataTitle = data[item].title;
    const dataDescription = data[item].description;
    const dataPrice = data[item].price;

    const overlay = document.createElement("div");
    overlay.className = "overlay overlay--info";
    overlay.style = `
            display: flex;
            align-items: stretch;
        `;

    const info = document.createElement("div");
    info.className = "modal modal-info";

    const closeButton = document.createElement("button");
    closeButton.className = "modal__close";
    closeButton.innerHTML = `
            <img class="modal__close-img" src="img/icons/icons.svg#modal-close" width="20" height="20" alt="Кнопка закрытия модального окна" title="Закрыть модальное окно">
        `;

    closeButton.addEventListener("click", closeModalInfo(overlay));

    const title = document.createElement("h2");
    title.className = "modal-info__title";
    title.textContent = dataTitle;

    const description = document.createElement("div");
    description.className = "modal-info__text";
    description.innerHTML = dataDescription;

    const price = document.createElement("p");
    price.className = "modal-info__price";
    price.innerHTML = dataPrice + " &#8381";

    info.append(title, description, price, closeButton);
    overlay.append(info);
    document.querySelector("body").append(overlay);
  }

  /* Закрытие модального окна */
  function closeModalInfo(overlay) {
    overlay.addEventListener("click", (event) => {
      const target = event.target;

      if (target === overlay || target.closest(".modal__close")) {
        overlay.remove();
        overlay.removeEventListener("click", closeModalInfo);
      }
    });
  }
})();
