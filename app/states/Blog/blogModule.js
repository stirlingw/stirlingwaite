export default Angular => {
    const ngBlogModule = Angular.module('blogApp', []);
    require('./BlogCtrl')(ngBlogModule);
}