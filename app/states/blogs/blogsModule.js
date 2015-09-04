export default Angular => {
    const ngBlogsModule = Angular.module('BlogsApp', []);
    require('./BlogsCtrl')(ngBlogsModule);
}