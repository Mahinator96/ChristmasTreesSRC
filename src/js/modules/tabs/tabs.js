/* 
  <div class="info__box">
    <ul class="info__box-tabs">
      <li class="info__box-tab info__box-tab--active" data-info="characteristics">tab 1</li>
      <li class="info__box-tab" data-info="equipment">tab 2</li>
      <li class="info__box-tab" data-info="description">tab 3</li>
    </ul>

    <ul class="info__box-list">
      <li class="info__box-item info__box-item--active" id="characteristics">
        <p>tab content 1</p>
      </li>
      <li class="info__box-item" id="equipment">
        <p>tab content 2</p>
      </li>
      <li class="info__box-item" id="description">
        <p>tab content 3</p>
      </li>
    </ul>
  </div>
*/

(function(){
  if (document.querySelector('.info__box')) {
  // Все табы
    const infoTabs = Array.from(document.querySelectorAll('.info__box-tab'));
    // Все листы
    const infoItems = Array.from(document.querySelectorAll('.info__box-item'));
    // Активный класс для таба
    const tabActive = 'info__box-tab--active';
    // Активный класс для листа
    const listActive = 'info__box-item--active';
    // Проверочный (основной класс) таба
    const tabClosest = '.info__box-tab';
    // Дата-атрибут - таба
    const data = 'data-info';



    // Спрятать все активные табы и списки
    const hideTabList = (tab, tabs, lists, tabActive, listActive) => {
      if (!tab.classList.contains(tabActive)) {
        tabs.forEach(item => {
          item.classList.remove(tabActive);
        })
        lists.forEach(item => {
          item.classList.remove(listActive);
        })
      }
    }

    // Добавить табу и листу активные классы
    const showTabList = function(e, tab, tabData, tabClosest, tabActive, ) {
      if ( e.target.closest(`${tabClosest}`)) {
        
        if (!tab.classList.contains(tabActive)) {
          tab.classList.add(tabActive);
          
          if (tabData) {
            const listId = document.getElementById(`${tabData}`);

            if (listId) {
              listId.classList.add(listActive);
            }
          }
        }
      }
    }

    infoTabs.forEach(tab => {
      const tabData = tab.getAttribute(data);
      
      tab.addEventListener('click', function(e) {

        hideTabList(tab, infoTabs, infoItems, tabActive, listActive);

        showTabList(e, tab, tabData, tabClosest, tabActive, listActive);
      })
    })
  }
}());