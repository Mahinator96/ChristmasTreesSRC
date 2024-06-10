(function () {
  /* Получение данных */
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
  // };

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

  /* С полученными данными отрисовываем список товаров */
  async function initItems() {
    // const data = await getData();
    const sectionProducts = document.querySelector(".products");
    sectionProducts.append(createProductsList(data));
    createNavigationProducts(data);
  }

  /* Создание списка товарав  и добавление его на страницу */
  function createProductsList(data) {
    const ul = document.createElement("ul");
    ul.className = "products__list";

    for (let key in data) {
      const item = data[key];

      const li = document.createElement("li");
      li.className = "products__item";
      li.id = key;

      const article = document.createElement("article");
      article.className = "product";

      const container = document.createElement("div");
      container.className = "container product__container";

      const content = document.createElement("div");
      content.className = "product__content";

      const title = document.createElement("h3");
      title.className = "product__title";
      title.textContent = item.title;

      const features = document.createElement("p");
      features.className = "product__features";
      features.textContent = item.features;

      const description = document.createElement("p");
      description.className = "product__description";
      description.textContent = item.hero;

      const buttonsWrapper = document.createElement("div");
      buttonsWrapper.className = "product__button-wrapper";

      const buttonMore = document.createElement("button");
      buttonMore.className =
        "button product__button-order button--beige button--outline";
      buttonMore.dataset.order = item.title;
      buttonMore.textContent = "Заказать";

      const buttonOrder = document.createElement("button");
      buttonOrder.className = "button product__button-more button--beige";
      buttonOrder.dataset.json = key;
      buttonOrder.textContent = "Побробнее";

      const picture = document.createElement("img");
      picture.className = "product__picture";
      picture.src = item.img;
      picture.width = 630;
      picture.height = 590;
      picture.alt = item.title;
      picture.title = item.title;

      buttonsWrapper.append(buttonMore, buttonOrder);
      content.append(title, features, description, buttonsWrapper);
      container.append(content, picture);
      article.append(container);
      li.append(article);
      ul.append(li);
    }

    return ul;
  }

  /* Создание элементов навигации исходя из полученных данных */
  function createNavigationProducts(data) {
    const navigationList = document.querySelector(".navigation__list");
    const navigationPay = document
      .querySelector('.navigation__link[href="#pay"')
      .closest("li");

    for (let key in data) {
      const itemNav = document.createElement("li");
      itemNav.className = "navigation__item";

      const linkProduct = document.createElement("a");
      linkProduct.className = "navigation__link";
      linkProduct.href = "#" + key;
      linkProduct.textContent = data[key].title;

      itemNav.append(linkProduct);

      navigationPay.before(itemNav);

      // navigationList.append(itemNav)
    }

    // return arrayItem;
  }

  initItems();
})();

/* 
    <li class="navigation__item">
        <a class="navigation__link" href="#product1">Пихта Фразера</a>
    </li>
*/
