'use strict';

export default {
    searchInit() {
        searching()
    }
}

let input = document.querySelector('#search-input');

function searching () {
    let btn = document.querySelector('.form__btn');

    btn.addEventListener('click', onClickSearchBtn);
    input.addEventListener('keypress', onKeyEnter);
}

function onClickSearchBtn (evt) {
    let trandingLinks = document.querySelectorAll('.tranding__link');

    evt.preventDefault();
    trandingLinks.forEach (link => {
        let linkValue = link.textContent;

        if (linkValue.toLowerCase().indexOf(input.value.toLowerCase()) == -1) {
            link.parentElement.style.display = 'none';
        } else {
            link.parentElement.style.display = '';

        }
    });
}
function onKeyEnter (evt) {
    if (evt.keyCode === 13) {
        evt.preventDefault();
        onClickSearchBtn(evt);
    }
}