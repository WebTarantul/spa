'use strict';

import Model from './model.js';
import View from './view';
import Router from './route'; 

export default {
    init () {
        var movies = Model.getTranding();

        movies.then(data => {
            if (!Router.getRoute()) {
                View.renderHome(data)
                window.movies = data;
            } else {
                View.renderMovie(data, Router.getRoute());
                let btn = document.querySelector('.form__btn');
                btn.addEventListener('click',(e) => location.hash = '')
            }
        });
  
    }
}
