export default Angular => {
    const ngBlogModule = Angular.module('blogApp', []);

    require('./blogCtrl')(ngBlogModule);
    //require('../../shared/img/home-bg.jpg');
}