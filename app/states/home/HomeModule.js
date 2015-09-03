export default Angular => {
    const ngHomeModule = Angular.module('homeApp', []);

    require('./homeCtrl')(ngHomeModule);
    //require('../../shared/img/home-bg.jpg');
}