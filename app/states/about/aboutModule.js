export default Angular => {
    const ngAboutModule = Angular.module('aboutApp', []);

    require('./aboutCtrl')(ngAboutModule);
    //require('../../shared/img/home-bg.jpg');
}