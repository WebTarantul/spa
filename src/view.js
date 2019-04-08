'use strict';

import Home from './pages/home';
import Movie from './pages/movie';
export default {
    renderHome (data) {
        Home.renderHome(data)
    },
    renderMovie (data, hash) {
        Movie.renderMovie(data, hash)
    },
    removeContent() {
        let resultsContainer = document.querySelector('.results');

        if (resultsContainer.firstElementChild) {
            resultsContainer.firstElementChild.remove();
        }
    }
}