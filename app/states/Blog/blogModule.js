export default Angular => {
    const ngBlogModule = Angular.module('BlogApp', []);
    require('./BlogCtrl')(ngBlogModule);
}