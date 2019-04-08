'use strict';

import Model from '../model';
export default {
    renderMovie(data, hash) {
        let template = document.querySelector('#trand-item-template').cloneNode(true);
        let templateInner = template.content;
        let img = templateInner.querySelector('.movie__img');
        let title = templateInner.querySelector('.movie__title');
        let description = templateInner.querySelector('.movie__descr');
        let recomendationList = templateInner.querySelector('.recomendation__list');
        let results = document.querySelector('.results');

        let dataItem = (data =>{
            for (let i = 0; i < data.length; i++) {
                const el = data[i];

                if (el.id == hash) {
                    return el;
                }
            }
  
        })(data)

        img.src = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${dataItem.poster_path}`;
        title.textContent = dataItem.original_title;
        description.textContent = dataItem.overview;
        Model.getRecomendation(hash)
            .then(dataRecomendations => {
                let templateItem = templateInner.querySelector('.recomendation__item');

                for (let i = 0; i < dataRecomendations.length; i++) {
                    const recomendationData = dataRecomendations[i];
                    let recomendationItem = templateItem.cloneNode(true);
                    let link =recomendationItem.querySelector('.recomendation__link');

                    link.href = `#${recomendationData.id}`;
                    link.textContent = recomendationData.original_title;
                    recomendationList.appendChild(recomendationItem);
                    if (i == dataRecomendations.length - 1) {
                      templateItem.remove();
                  }
                }

                results.appendChild(templateInner);
            })
            .catch(err => new Error(err));
        console.log(templateInner);

    }

}