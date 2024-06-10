(function(){
    if (document.querySelector('.product__button-order')) {
        const buttonsOrder = document.querySelectorAll('.product__button-order');
        const overlayOrder = document.querySelector('.overlay__order');
        const order = overlayOrder.querySelector('.modal__order');

        // buttonsOrder.forEach((buttonOrder) => {
        //     buttonOrder.addEventListener('click', () => {
        //         overlayOrder.classList.add('overlay--active');

        //         order.value = buttonOrder.dataset.order;
        //     })
        // })

        // overlayOrder.addEventListener('click', (event) => {
        //     const target = event.target;

        //     if (target === overlayOrder || target.closest('.modal__close')) {
        //         overlayOrder.classList.remove('overlay--active');
        //     }
        // })

        document.body.addEventListener('click', (e) => {
            if (e.target.classList.contains('product__button-order')) {
                overlayOrder.classList.add('overlay--active');

                order.value = e.target.dataset.order;
            }

            if (e.target === overlayOrder || e.target.closest('.modal__close')) {
                overlayOrder.classList.remove('overlay--active');
            }
        });
    }
}())