'use strict';
import View from '../view'
export default {
    renderHome(data) {
        let template = document.querySelector('#tranding-list-template').cloneNode(true);
        let templateInner = template.content;
        let listWrapper = templateInner.querySelector('.tranding__list');
        let results = document.querySelector('.results');

        View.removeContent();

        for (let i = 0; i < data.length; i++) {
            const movie = data[i];
            let listItem = templateInner.querySelector('.tranding__item');
            let listItemNew = listItem.cloneNode(true);
            let link = listItemNew.querySelector('.tranding__link');

            link.textContent = movie.original_title;
            link.href = `#${movie.id}`;
            listWrapper.appendChild(listItemNew);
            if (i == data.length - 1) {
                listItem.remove();
            }
        }
        results.appendChild(listWrapper);

    }

}