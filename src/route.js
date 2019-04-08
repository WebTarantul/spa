'use strict';
import Controller from './controller'
import View from './view'
export default {
    getRoute () {
        const hash = location.hash.slice(1) || '';
        
        return hash;
    },
    onChangeHash () {
      View.removeContent();
      Controller.init();
    },
    init() {
      addEventListener('hashchange', this.onChangeHash);
      this.getRoute();
    }
}