'use strict';

let apiKey = '?api_key=' + 'f483e55ea009cc45c9679d143f6cfe26';

function getData(url, params) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url+params+apiKey);
        xhr.onload = function () {
            if (xhr.status === 200) {
                let json = JSON.parse(xhr.response);

                resolve(json.results);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = function (err) {
            reject(err);
        };
        xhr.send();
    });
}

export default {
    getTranding() {
        return getData('https://api.themoviedb.org/3/', 'trending/movie/day')
            .then(tranding => tranding)
    },
    getRecomendation(movie) {
        return getData('https://api.themoviedb.org/3/', `movie/${movie}/recommendations`);
    }
}
