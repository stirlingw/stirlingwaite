export default Angular => {
    const ngBlogsModule = Angular.module('blogsApp', []);
    require('./BlogsCtrl')(ngBlogsModule);
}