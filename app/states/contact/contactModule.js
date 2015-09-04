export default Angular => {
    const ngContactModule = Angular.module('contactApp', []);

    require('./contactCtrl')(ngContactModule);
    //require('../../shared/img/home-bg.jpg');
}