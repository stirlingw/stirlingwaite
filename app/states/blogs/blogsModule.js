export default Angular => {
    const ngBlogsModule = Angular.module('blogsApp', []);
    require('./blogsCtrl')(ngBlogsModule);
}